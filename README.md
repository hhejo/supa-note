# 수 파 노 트

간단한 노트 앱

## 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white">

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=Supabase&logoColor=white">

## 환경설정

```bash
nvm use --lts
npx create-next-app@latest
```

## Firebase v Supabase

Firebase의 장점

- 다양한 서비스와 폭넓은 연동지원
- 적용이 매우 쉽고 문서화가 잘 되어있음
- 성숙한 커뮤니티
- 앱, 웹에서 단순하게 사용할 수 있는 NoSQL 기반

Firebase의 단점

- 오픈소스가 아님 (Vendor Lock-In 이슈)
- 복잡한 쿼리 불가 (NoSQL 기반)
- 유저가 많아졌을 때 비용이 많이 듦
- 앱 개발에는 월등히 좋으나, 웹 개발에 최적화되지 않음

Supbase의 기능

- Database: PostreSQL 기반의 실시간 DB 지원
- Authentication: 소셜 로그인, OTP 로그인 모두 지원
- Storage: 파일 업로드, 일정 시간 다운로드 등 고급 기능 지원
- Realtime: 실시간 채팅, 알림 등을 쉽게 구현 가능

Supabase의 장점

- 오픈소스 프로젝트 (자체 서버 구축 가능)
- PostgreSQL 기반 (관계형 DB 장점 살리기)
- Firebase 대비 저렴함
- 다양한 연동 방식 지원 (GraphQL, API, SDK, DB Connection)

Supabase의 단점

- 아직 성숙하지 않은 커뮤니티 기반
- 비교적 적은 기능들, 적은 서비스 연동 지원
- 부족한 문서화, 한글 문서 부족
- Firebase보다 높은 러닝커브

## Getting Started

### Supabase 패키지 설치

```bash
npm install @supabase/supabase-js
```

### Supabase 클라이언트 생성

```javascript
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://xyzcompany.supabase.co',
  'public-anon-key'
);
```

## Queries

### Select

기본 Select 쿼리

```javascript
const { data, error } = await supabase.from('countries').select('*');
```

특정 필드만 쿼리

```javascript
const { data, error } = await supabase.from('countries').select('name');
```

다른 테이블 JOIN

```javascript
const { data, error } = await supabase
  .from('countries')
  .select(`name, cities(name)`);
```

결과 개수 카운트 쿼리

```javascript
const { count, error } = await supabase
  .from('countries')
  .select('*', { count: 'exact', head: true });
```

JSON 필드 쿼리

```javascript
const { data, error } = await supabase
  .from('users')
  .select(`id, name, address->city`);
```

복잡한 검색 기능 구현 (textSearch 함수)

```javascript
const { data, error } = await supabase
  .from('quotes')
  .select('catchphrase')
  .textSearch('catchphrase', `'fat or cat'`, {
    type: 'websearch',
    config: 'english',
  });
```

### Insert

데이터 삽입

```javascript
const { error } = await supabase
  .from('countries')
  .insert({ id: 1, name: 'Denmark' });
```

데이터 삽입 후 결과 반환

```javascript
const { data, error } = await supabase
  .from('countries')
  .insert({ id: 1, name: 'Denmark' })
  .select();
```

한번에 여러 Row 삽입

```javascript
const { error } = await supabase.from('countries').insert([
  { id: 1, name: 'Nepal' },
  { id: 1, name: 'Vietnam' },
]);
```

### Update

Row 업데이트

```javascript
const { error } = await supabase
  .from('countries')
  .update({ name: 'Australia' })
  .eq('id', q);
```

업데이트 후 결과 반환

```javascript
const { error } = await supabase
  .from('countries')
  .update({ name: 'Australia' })
  .eq('id', q)
  .select();
```

JSON 데이터 업데이트

```javascript
const { data, error } = await supabase
  .from('users')
  .update({ address: { street: 'Melrose Place', postcode: 90210 } })
  .eq('address->postcode', 90210)
  .select();
```

### Upsert

한 Row Upsert 쿼리

```javascript
const { data, error } = await supabase
  .from('countries')
  .upsert({ id: 1, name: 'Albania' })
  .select();
```

한번에 여러 Row Upsert 쿼리

```javascript
const { data, error } = await supabase
  .from('countries')
  .upsert([
    { id: 1, name: 'Albania' },
    { id: 2, name: 'Algeria' },
  ])
  .select();
```

id가 아닌 다른 필드로 Upsert

```javascript
const { data, error } = await supabase
  .from('users')
  .upsert(
    { id: 42, handle: 'saoirse', display_name: 'Saoirse' },
    { onConflict: 'handle' }
  )
  .select();
```

### Delete

한 Row Delete

```javascript
const response = await supabase.from('countries').delete().eq('id', 1);
```

Delete 후 결과 반환

```javascript
const { data, error } = await supabase
  .from('countries')
  .delete()
  .eq('id', 1)
  .select();
```

여러 Row 제거

```javascript
const response = await supabase.from('countries').delete().in('id', [1, 2, 3]);
```
