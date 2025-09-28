// lib/api.ts
/*
export type Post = {
  id: string;
  title: string;
  content: string;
};

let _posts: Post[] = [
  { id: "1", title: "Hello World", content: "첫 번째 글입니다" },
  { id: "2", title: "Next.js + Tailwind", content: "프론트엔드 연습 프로젝트" },
];
*/

/* 2026-09-28 before changed structure.
import { Post } from "./types";
let _posts: Post[] = [
  { id: "1", title: "Hello World", body: "첫 번째 글입니다" },
  { id: "2", title: "Next.js + Tailwind", body: "프론트엔드 연습 프로젝트" },
];
*/
// 2025-09-28 The following statement has been added the seed.ts as exam.
import { countries, companies, posts } from "@/lib/seed";
import { Post, Company, Country } from "./types";
/* 2025-09-28 before optimized the source code.
let _posts: Post[] = [
  { id: "p1", 
    title: "Sustainability Report", 
    resourceUid: "c1",
    dateTime: "2024-02",
    content: "Quarterly CO2 update"  
  },
];
*/

// 2025-09-28 Before changing assignment directly.
// let _countries = ["US", "DE"];  // as exam.
let _countries = [...countries];  // as exam.
let _companies = [...companies];
let _posts = [...posts];

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const jitter = () => 200 + Math.random() * 600;

// 2025-09-28 It has been added the following statement due to exam.
const maybeFail = () => Math.random() < 0.15;

export async function fetchCountries(): Promise<Country[]> {
  await delay(jitter());
  return _countries;
}

export async function fetchCompanies(): Promise<Company[]> {
  await delay(jitter());
  return _companies;
}

export async function fetchPosts() {
  await delay(jitter());
  return _posts;
}

// 2025-09-28 The following codes are added as exam.
export async function createOrUpdatePost(p: Omit<Post, "id"> & { id?: string }): Promise<Post> {
  await delay(jitter());
  if (maybeFail()) throw new Error("Save failed");

  if (p.id) {
    _posts = _posts.map(x => x.id === p.id ? (p as Post) : x);
    return p as Post;
  }

  const created: Post = { ...p, id: crypto.randomUUID() };
  _posts = [..._posts, created];
  return created;
}

/* 2025-09-28 The following structure is confliting as types.ts, so comment it out.
export interface Company {
  id: number;
  name: string;
  totalEmissions: number;
  monthlyTarget: number;
  reductionRate: number;
}
*/

/* 2025-09-28 Before changing source code due to optimization.
export async function fetchCompanies(): Promise<Company[]> {
  // 실제 API 대신 가짜 데이터 (나중에 fetch("/api/companies")로 교체 가능)
  return [
    {
      id: 1,
      name: "Hanaloop Inc.",
      totalEmissions: 12500,
      monthlyTarget: 1200,
      reductionRate: 15,
    },
    {
      id: 2,
      name: "EcoFuture Corp.",
      totalEmissions: 8200,
      monthlyTarget: 800,
      reductionRate: 22,
    },
  ];
}
*/

export interface EmissionData {
  month: string;
  emissions: number;
}

// 2025-09-28 The following parameters won't be changed statement befor modification.
/*
export async function fetchEmissions(companyId: number): Promise<EmissionData[]> {
  // 회사별 가짜 데이터
  if (companyId === 1) {
    return [
      { month: "Jan", emissions: 400 },
      { month: "Feb", emissions: 380 },
      { month: "Mar", emissions: 500 },
      { month: "Apr", emissions: 450 },
    ];
  }
  return [
    { month: "Jan", emissions: 300 },
    { month: "Feb", emissions: 290 },
    { month: "Mar", emissions: 310 },
    { month: "Apr", emissions: 280 },
  ];
}
*/

export async function fetchEmissions(companyId: string): Promise<EmissionData[]> {
  // 회사별 가짜 데이터
  if (companyId === "c1") {
    return [
      { month: "Jan", emissions: 400 },
      { month: "Feb", emissions: 380 },
      { month: "Mar", emissions: 500 },
      { month: "Apr", emissions: 450 },
    ];
  }
  return [
    { month: "Jan", emissions: 300 },
    { month: "Feb", emissions: 290 },
    { month: "Mar", emissions: 310 },
    { month: "Apr", emissions: 280 },
  ];
}