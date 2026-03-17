---
title: "C++ PImpl Idiom"
description: "컴파일 의존성을 끊고 ABI 안정성을 확보하는 PImpl 패턴의 구조, 동작 원리, 그리고 적용 시 고려할 점을 정리한다."
date: 2020-07-12
tags: ["C++", "디자인 패턴"]
---

C++에서 헤더 파일을 하나 수정하면 그 헤더를 포함하는 모든 번역 단위가 다시 컴파일된다. 프로젝트가 커질수록 이 연쇄 재컴파일이 빌드 시간을 지배하게 된다. 클래스의 private 멤버 하나를 바꿨을 뿐인데 수백 개의 파일이 다시 빌드되는 상황은 드물지 않다.

PImpl(Pointer to Implementation)은 이 문제를 구조적으로 해결하는 idiom이다. 핵심 아이디어는 단순하다. 클래스의 구현 세부사항을 헤더에서 분리하여 소스 파일로 숨긴다.

## 기본 구조

PImpl을 적용하지 않은 일반적인 클래스는 헤더에 모든 멤버를 노출한다.

```cpp
// widget.h
#include <string>
#include <vector>
#include "gadget.h"

class Widget {
public:
    Widget();
    void doSomething();

private:
    std::string name_;
    std::vector<int> data_;
    Gadget gadget_;
};
```

이 헤더를 포함하는 모든 파일은 `<string>`, `<vector>`, `"gadget.h"`에도 간접적으로 의존한다. `Gadget`의 정의가 바뀌면 `Widget`을 포함하는 모든 파일이 재컴파일된다. `name_`이나 `data_`는 외부에서 접근할 수 없는 private 멤버임에도 불구하고, 이 정보가 헤더에 있다는 이유만으로 컴파일 의존성을 만든다.

PImpl을 적용하면 이렇게 바뀐다.

```cpp
// widget.h
#include <memory>

class Widget {
public:
    Widget();
    ~Widget();

    Widget(Widget&& other) noexcept;
    Widget& operator=(Widget&& other) noexcept;

    void doSomething();

private:
    struct Impl;
    std::unique_ptr<Impl> pImpl_;
};
```

```cpp
// widget.cpp
#include "widget.h"
#include <string>
#include <vector>
#include "gadget.h"

struct Widget::Impl {
    std::string name;
    std::vector<int> data;
    Gadget gadget;
};

Widget::Widget()
    : pImpl_(std::make_unique<Impl>()) {}

Widget::~Widget() = default;

Widget::Widget(Widget&& other) noexcept = default;
Widget& Widget::operator=(Widget&& other) noexcept = default;

void Widget::doSomething() {
    pImpl_->gadget.use(pImpl_->data);
}
```

헤더에는 `Impl`의 전방 선언과 그에 대한 포인터만 남는다. `<string>`, `<vector>`, `"gadget.h"` 같은 구현 의존성은 전부 소스 파일로 이동했다. 이제 `Impl`의 내부를 아무리 바꿔도 헤더가 변하지 않으므로, `widget.h`를 포함하는 다른 파일들은 재컴파일되지 않는다.

## 왜 소멸자를 소스 파일에서 정의해야 하는가

위 코드에서 `Widget::~Widget() = default;`가 헤더가 아니라 소스 파일에 있는 것은 의도적이다.

`std::unique_ptr<Impl>`의 소멸자는 `Impl`의 완전한 정의를 필요로 한다. 소멸자가 헤더에서 인라인으로 생성되면, 그 시점에 `Impl`은 불완전한 타입(incomplete type)이므로 컴파일 오류가 발생한다. 소멸자를 소스 파일에서 정의하면, `Impl`의 완전한 정의가 보이는 컨텍스트에서 소멸자가 생성되기 때문에 문제가 없다.

같은 이유로 이동 생성자와 이동 대입 연산자도 소스 파일에서 정의한다. 이들 역시 `unique_ptr`의 내부 연산을 수행할 때 `Impl`의 완전한 정의가 필요하다.

## 컴파일 방화벽

PImpl의 첫 번째 이점은 **컴파일 의존성의 차단**이다. 이를 "컴파일 방화벽(compilation firewall)"이라고도 부른다.

대규모 프로젝트에서 헤더 의존성은 그래프 형태로 퍼진다. 저수준 유틸리티 클래스의 헤더가 바뀌면 그 위에 쌓인 모든 계층이 재컴파일된다. PImpl은 이 전파를 차단한다. 공개 헤더가 안정적으로 유지되면, 구현이 바뀌어도 의존하는 쪽은 영향을 받지 않는다.

빌드 시간에 대한 영향은 프로젝트 규모에 비례한다. 파일이 수십 개인 프로젝트에서는 차이가 미미하지만, 수백~수천 개의 번역 단위가 있는 프로젝트에서는 private 멤버 변경 하나가 수 분의 재컴파일을 유발할 수 있고, PImpl은 이를 해당 소스 파일 하나의 재컴파일로 줄인다.

## ABI 안정성

PImpl의 두 번째 이점은 **ABI(Application Binary Interface) 안정성**이다. 라이브러리를 배포하는 경우에 특히 중요하다.

클래스의 멤버 변수가 바뀌면 객체의 메모리 레이아웃이 바뀐다. 이는 ABI 변경이며, 라이브러리를 사용하는 쪽이 재컴파일해야 한다는 뜻이다. PImpl을 사용하면 공개 클래스의 크기는 항상 포인터 하나분이므로, 구현을 변경해도 ABI가 유지된다. 라이브러리의 새 버전을 배포할 때 사용자가 재컴파일 없이 바이너리만 교체할 수 있게 된다.

Qt 프레임워크가 이 패턴을 광범위하게 사용하는 대표적인 사례다. Qt의 공개 클래스 대부분은 내부적으로 `d_ptr`이라는 이름의 PImpl 포인터를 가지고 있으며, 이를 통해 메이저 버전 내에서 ABI 호환성을 유지한다.

## 비용

PImpl은 공짜가 아니다. 적용하기 전에 비용을 이해해야 한다.

**힙 할당.** `Impl` 객체는 힙에 생성된다. 객체가 빈번하게 생성·소멸되는 경우 할당 비용이 누적될 수 있다. `std::make_unique`가 단일 할당을 보장하므로 오버헤드를 최소화할 수는 있지만, 스택 할당에 비하면 여전히 비용이 있다.

**간접 참조.** 멤버에 접근할 때마다 포인터를 한 번 역참조해야 한다. 현대 CPU에서 단일 포인터 역참조의 비용은 대부분 무시할 수 있는 수준이지만, 캐시 지역성이 떨어질 수 있다. 외부 클래스와 `Impl` 객체가 메모리상 떨어져 있기 때문이다.

**코드 작성량.** 공개 인터페이스의 모든 메서드가 `Impl`로 호출을 위임해야 하므로, 포워딩 코드가 발생한다. 메서드가 많은 클래스에서는 이 boilerplate가 상당할 수 있다.

**복사 의미론.** `unique_ptr`은 복사할 수 없으므로, 클래스가 복사 가능해야 한다면 복사 생성자와 복사 대입 연산자를 직접 구현해야 한다.

```cpp
// 복사가 필요한 경우
Widget::Widget(const Widget& other)
    : pImpl_(std::make_unique<Impl>(*other.pImpl_)) {}

Widget& Widget::operator=(const Widget& other) {
    *pImpl_ = *other.pImpl_;
    return *this;
}
```

`Impl`의 깊은 복사를 수행하므로 의미적으로는 올바르지만, 이를 명시적으로 작성해야 한다는 점이 부담이다.

## 언제 사용하는가

PImpl은 모든 클래스에 적용할 패턴이 아니다. 비용과 이점의 균형을 고려해야 한다.

**적합한 경우:**
- 라이브러리의 공개 API를 구성하는 클래스. ABI 안정성이 중요하다.
- 헤더에 무거운 의존성을 끌어오는 클래스. 시스템 헤더나 서드파티 헤더를 포함해야 하는 경우.
- 빌드 시간이 문제인 대규모 프로젝트에서 널리 포함되는 헤더.

**부적합한 경우:**
- 성능이 극도로 중요한 경로의 작은 객체. 힙 할당과 간접 참조 비용이 의미 있는 수준이 될 수 있다.
- 내부 구현 클래스. 외부에 노출되지 않는 클래스에는 컴파일 방화벽의 이점이 없다.
- 템플릿 클래스. 템플릿 정의가 헤더에 있어야 하므로 PImpl과 구조적으로 맞지 않는다.

## `unique_ptr` vs `shared_ptr`

앞선 예제에서는 `std::unique_ptr`을 사용했는데, `std::shared_ptr`을 쓰는 변형도 존재한다.

`shared_ptr`을 쓰면 소멸자를 소스 파일에 따로 정의할 필요가 없다. `shared_ptr`의 deleter가 타입 소거(type erasure)를 사용하기 때문에, 소멸 시점이 아니라 생성 시점에 `Impl`의 완전한 정의가 있으면 된다. 복사 시에는 참조 카운트가 증가하므로 얕은 복사가 되며, 이는 값 의미론이 아니라 공유 의미론이 된다.

대부분의 경우 `unique_ptr`이 더 적절하다. PImpl의 소유권은 명확히 외부 클래스에 있고, 공유할 이유가 없기 때문이다. `shared_ptr`은 참조 카운트의 추가 비용이 있으며, 소유권 의미가 모호해질 수 있다.

---

PImpl은 C++의 헤더 기반 컴파일 모델에서 비롯된 문제를 해결하는 오래된 idiom이다. 컴파일 의존성 차단과 ABI 안정성이라는 두 가지 실질적인 이점을 제공하지만, 힙 할당, 간접 참조, boilerplate 코드라는 비용이 수반된다.

C++20의 모듈이 널리 채택되면 컴파일 의존성 문제 자체가 줄어들 수 있다. 하지만 ABI 안정성이 필요한 라이브러리 경계에서는 모듈 도입 이후에도 PImpl의 역할이 유효하다. 도구가 바뀌어도 "인터페이스와 구현을 분리한다"는 원칙 자체는 변하지 않기 때문이다.
