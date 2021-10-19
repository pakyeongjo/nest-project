# 강의 내용 메모

## 2021.10.18

1. src 디렉토리 안의 main.ts 파일의 이름은 변경할 수 없다.
2. 메인 함수의 이름은 변경할 수 있다. 기본 값은 bootstrap?
3. main.ts의 함수 안에서 AppModule을 타고 들어가보면 app.module.ts 파일 안에 @Module이라는게 있는데 얘 이름이 데코레이터 (파이썬의 데코레이터랑은 무슨 관계지)
4. NestJs는 데코레이터와 함께한다함. 중요하다함
5. 데코레이터는 클래스에 함수 기능을 추가할 수 있는 놈. "클래스 위의 함수이고 클래스를 위해 동작한다"
6. localhost:3000의 "hello world"는 getHello()의 결과물
7. main.ts의 AppModule은 NestJS 모든 것의 시작점 (django에서 manage.py?)
8. main.ts가 manage.py같은거고 Module이 app 같은거네
9. 임폴던트 히얼 뚜 노 원띵 컨트롤러, 어나더띵 프로바이더
10. 컨트롤러는 URL을 가져오고 함수를 실행한다.
11. GET "데코레이터"는 Djnago 뷰랑 비슷하게 작성하는듯
12. 데코레이터랑 함수 사이에 공백 라인을 두면 안된다네 왜지
13. 왠지 모르겠는데 reload가 안됨.
14. Service는 비즈니스 로직 구별하는 역할인가보네 이게 구조에 있는거 처음보네
15. Service에서 함수 이름이랑 Controller 함수 이름은 같을 필요가 없다.

## 2021.10.19

1. Nest CLI의 generate로 controller, class, resource 등을 만들 수 있네. 신기한 인터페이스임
2. 콘솔에 nest를 입력하면 커맨드가 다 나옴
3. controller 같은거에 네이밍 컨벤션이 있나 찾아봐야겠다. 얘는 복수형으로 쓰긴 하는데
4. 컨트롤러를 만드니까 src 아래 디렉토리가 생기고 그 안에 controller.ts가 생기네. 모듈에 import는 자동으로 해줌 (어떻
5. spec 파일은 테스트를 위한 놈이라고 함. 그리고 또 지우라함 (왜?)
6. @Controller(데코레이터?)의 인자로 받는 부분이 컨트롤러 url의 엔트리 포인트를 담당하나봄 (맘대로 바꿔도 되나?)
7. Get 데코레이터에서 라우팅을 담당하는 인자 쪽은 슬래시를 앞에 붙여도 되고 뒤에 붙여도 되고 안붙여도 되고 ''를 넣어도 되고 아무것도 안넣어도 됨. 자유도가 높은듯
8. @Controller 인자도 컨트롤러 이름이랑 같을 필요 없는거 맞음
9. id 받을 때 정수나 문자열이 다 됨. 와이?
10. 아 reloard 안되는거 npm run start:dev나 nest start --watch 하면 되는듯
11. params 데코레이터를 쓰는데.. 문자열 안에서 변수를 쓰려면 `` 안에 넣어야 먹네 이건 js 문법인가?
12. Get - Retrieve가 위에 있고 Get - search가 아래에 있으면 서치 어쩌구저쩌구 해도 id로 본다. 윗 라인이 우선순위인가봄?



