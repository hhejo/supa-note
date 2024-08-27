# 수 퍼 노 트

간단한 노트 앱

## 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

<img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=nextjs&logoColor=white"> <img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">

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

### Upsert

한 Row Upsert 쿼리

```javascript
const { data, error } = await supabase
  .from('countries')
  .upsert({ id: 1, name: 'Albania' })
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

SUPABASE

SUPABASE

SUPABASE

SUPABASE

SUPABASE

SUPABASE

SUPABASE

SUPABASE
