https://www.acmicpc.net/problem/1158


### Comment
- pass1 처럼 리스트를 이용해도 무방하나, pass2 처럼 큐 자료구조 형태로 풀면 간단하게 풀 수 있음

1.  K 번째 사람마다 제거해야 함으로 미리 queue에 모든 1번부터 N번까지 사람을 넣어둔 뒤 K-1 번째가 될때까지 dequeue를 한 값을 push로 맨 뒤로 옮긴다.
2.  그 후 제일 앞의 사람이 K번째의 사람이 되므로 dequeue 한 후 result에 값을 넣어주면 된다.
3.  1~2를 queue의 모든 값이 사라질 때 까지 반복하여 출력하면 됨
4.  pass2에서 사용한 해당 방식은 자바스크립트에서 실제 queue를 구현한 것이 아니고 queue로 해결하는 방식을 자바스크립트의 list 메소드를 이용해서 사용한 것

### 참고 자료
- https://j3sung.tistory.com/258
- https://hyeonnii.tistory.com/156