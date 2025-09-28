// ### 4. 타입 정의 (`lib/types.ts`)
// ```ts
export interface Country {
  id: string;
  name: string;
}

type GhgEmission = {
  yearMonth: string;  // "2025-01", "2025-02", "2025-03"
  source?: string; // gasoline, lpg, diesel, etc
  emissions: number; // tons of CO2 equivalent
};

export interface Company {
  id: string;
  name: string;
  country: string;  // Country.code
  emissions: GhgEmission[];
}
/*
export interface Company {
  id: string;
  name: string;
  countryId: string;
}
*/

/*
export interface Post {
  id: string;
  title: string;
  body: string;
  companyId: string;
}
*/

/* 2025-09-28 before changed structure.
export type Post = {
  id: string;
  title: string;
  body: string;  // 원래 API 스펙에 따라 body 포함
};
*/

export type Post = {
  id: string;
  title: string;
  resourceUid: string; // Company.id
  dateTime: string;    // e.g., "2024-02"
  content: string;
};
