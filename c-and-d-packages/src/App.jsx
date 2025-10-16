import { useEffect } from "react";
import PackageCard from "./components/PackageCard.jsx";
import "./styles/app.css";

/** 옵션 다다익선 할인(상단 공지용) */
const DISCOUNTS = [
  ["옵션 2개 선택", "총액 -5%", "ADDONS/DESIGN 혼합 가능"],
  ["옵션 3개 선택", "총액 -8%", "패키지와 동시 발주 시"],
  ["옵션 4개 이상", "총액 -10%", "상시 최대 10%"],
  ["디자인 번들", "묶음가 -12%", "로고+브랜드키트+SNS 템플릿"],
];

/** 카드용 요약 데이터(가격 리밸런싱 적용) */
const PACKAGES = [
  {
    id: "starter",
    name: "Starter LP",
    tagline: "행사/제품 소개용 원페이지",
    when: "신제품/이벤트/예약·문의 유도 — 한 페이지로 핵심만",
    price: "45만~69만 (1~2주, 수정 1회)",
    features: [
      "상단 큰 배너",
      "회사/서비스 요약",
      "고객 로고/후기",
      "문의 버튼(카톡/폼)",
      "반응형",
      "SEO 기본, GA4, 파비콘",
    ],
    not: ["블로그/뉴스", "결제", "다국어"],
  },
  {
    id: "bizmini",
    name: "Biz Mini",
    tagline: "회사 소개형 소규모 사이트(4페이지)",
    when: "회사 소개 + 서비스 + 문의까지 갖춘 미니 홈페이지",
    price: "95만~140만 (2~3주, 수정 2회)",
    features: [
      "메인 / 회사소개 / 서비스 / 문의(4p)",
      "부드러운 등장 애니메이션",
      "문의 폼 → 메일 알림",
    ],
    not: ["블로그/뉴스", "자체 결제"],
  },
  {
    id: "content",
    name: "Content Lite",
    tagline: "뉴스/블로그 있는 홍보형",
    when: "공지/소식/블로그 글을 직접 올리고 관리할 때",
    price: "150만~210만 (약 3주, 수정 2회)",
    features: [
      "Biz Mini 전부 + 뉴스/블로그(목록/상세)",
      "구글시트 또는 JSON/MD 업로드",
      "카테고리/태그, 썸네일, 숨김, 기본 검색",
    ],
    not: [],
  },
  {
    id: "shoplink",
    name: "Shop Link",
    tagline: "상품 소개 + 외부 결제 연동",
    when: "결제는 스마트스토어/토스 등으로 연결하면 되는 경우",
    price: "190만~250만 (3~4주, 수정 2회)",
    features: [
      "상품 목록/상세(옵션/가격/재고 표기)",
      "외부 결제 페이지로 즉시 이동",
    ],
    not: ["자체 결제/주문·정산 시스템"],
  },
];

/** 선택 옵션(기존 유지) */
const ADDONS = [
  ["라이트 브랜딩", "로고 1안 + 브랜드 색/폰트 가이드 1세트", "30~60만"],
  ["카피라이팅", "메인/회사/서비스 카피 고도화", "30~60만"],
  ["간이 CMS", "구글시트/파일 업로드로 글·리스트 관리", "30~60만"],
  ["다국어", "한국어+영어 등(언어당)", "30~70만"],
  ["사진/이미지 편집", "스톡 추천 + 간단 보정/합성", "15~40만"],
  ["고급 인터랙션", "눈길 끄는 모션 1~2곳 정교 구현", "50~120만"],
];

/** 새로 추가: 디자인 전용 옵션(손님용) */
const DESIGN = [
  [
    "로고 디자인(라이트)",
    "텍스트/심볼 1안 제안 + 리비전 2회, 납품: PNG/SVG",
    "35~70만",
  ],
  [
    "브랜드 키트(미니)",
    "메인/보조 색상·폰트·버튼/배지 스타일 가이드 1p PDF",
    "25~55만",
  ],
  [
    "스티커·굿즈 시안",
    "워드마크/캐릭터 스티커 6종 or 머그/명함 1세트 시안",
    "20~45만",
  ],
  [
    "SNS 카드 템플릿(5종)",
    "인스타/블로그용 편집 가능 템플릿 + 사용 가이드",
    "15~35만",
  ],
  ["배너·썸네일 패키지", "메인 히어로 1 + 섹션 2 + OG 이미지 1", "15~30만"],
  ["사진 리터칭 라이트", "노출/색감 보정 + 단순 합성(컷 10장 기준)", "15~30만"],
  ["일러스트(라이트)", "마스코트/아이콘형 1컷(평면 스타일)", "20~40만"],
];

const CARE = [
  ["라이트", "텍스트/배너 교체 월 2건 + 간단 빌드/배포", "월 5만~10만"],
  ["스탠다드", "교체 월 4건 + 작은 섹션 수정", "월 15만~25만"],
  ["건당", "약정 없음, 1건 단위(난이도별)", "5만~"],
];

export default function App() {
  useEffect(() => {
    document.title = "C&D — 패키지 비교 데모";
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* 상단: 옵션 다다익선 할인 */}
      <section id="discounts" className="cd-section">
        <div className="cd-container">
          <p className="kicker">옵션 다다익선 할인</p>
          <div className="table">
            <div className="row head">
              <div>조건</div>
              <div>혜택</div>
              <div>비고</div>
            </div>
            {DISCOUNTS.map(([a, b, c], i) => (
              <div className="row" key={i}>
                <div>{a}</div>
                <div>
                  <b>{b}</b>
                </div>
                <div className="dim">{c}</div>
              </div>
            ))}
          </div>
          <p className="tip">
            * 패키지+옵션 동시 진행 기준 · 중복할인 불가 · 세부 견적에 따라
            적용율이 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* 빠른 선택 가이드 */}
      <section id="quick" className="cd-section first">
        <div className="cd-container">
          <p className="kicker">빠른 선택 가이드</p>
          <div className="quick-list">
            <button onClick={() => scrollTo("starter")} className="pill">
              한 장으로 핵심만: <b>Starter LP</b>
            </button>
            <button onClick={() => scrollTo("bizmini")} className="pill">
              회사 소개 4페이지: <b>Biz Mini</b>
            </button>
            <button onClick={() => scrollTo("content")} className="pill">
              소식/블로그 직접 올리기: <b>Content Lite</b>
            </button>
            <button onClick={() => scrollTo("shoplink")} className="pill">
              상품 소개 + 외부 결제 링크: <b>Shop Link</b>
            </button>
            <button onClick={() => scrollTo("budget")} className="pill">
              지금 당장 빠르고 저렴하게: <b>초간단 원페이지</b>
            </button>
            {/* 새로 추가: 디자인 버튼 */}
            <button onClick={() => scrollTo("design")} className="pill">
              브랜드/디자인만 필요해요: <b>디자인 옵션</b>
            </button>
          </div>
        </div>
      </section>

      {/* 요약 카드 그리드 */}
      <section id="packages" className="cd-section">
        <div className="cd-container">
          <h2>패키지</h2>
          <p className="dim">
            필수/선택 요소를 명확히 나눠서 맞춤 추천 드립니다.
          </p>
          <div className="grid">
            {PACKAGES.map((p) => (
              <PackageCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* 패키지 상세 설명 */}
      <section id="details" className="cd-section">
        <div className="cd-container">
          <h2>패키지 설명</h2>

          <article id="starter" className="pkg-detail">
            <h3>1) Starter LP — 행사/제품 소개용 원페이지</h3>
            <ul className="bullets">
              <li>
                <b>언제 맞나요:</b> 신제품, 이벤트, 예약·문의 유도처럼 한
                페이지로 핵심만 보여줄 때.
              </li>
              <li>
                <b>들어가는 것:</b> 상단 큰 배너, 회사/서비스 요약, 고객
                후기/로고, 문의 버튼(카톡/설문), 반응형.
              </li>
              <li>
                <b>기본 작업:</b> SEO 기본 세팅, GA4 연동, 파비콘.
              </li>
              <li>
                <b>기간/비용:</b> 1~2주 / <b>45만~69만</b> (수정 1회).
              </li>
              <li className="note">
                <b>제외:</b> 블로그/뉴스 글관리, 결제, 다국어.
              </li>
            </ul>
          </article>

          <article id="bizmini" className="pkg-detail">
            <h3>2) Biz Mini — 회사 소개형 소규모 사이트(4페이지)</h3>
            <ul className="bullets">
              <li>
                <b>언제 맞나요:</b> 회사 소개 + 서비스 설명 + 문의까지 갖춘 미니
                홈페이지가 필요할 때.
              </li>
              <li>
                <b>구성 예시:</b> 메인, 회사소개, 서비스, 문의(총 4페이지).
              </li>
              <li>
                <b>특징:</b> 과하지 않은 등장 애니메이션, 문의 폼 작성 시 메일
                알림.
              </li>
              <li>
                <b>기간/비용:</b> 2~3주 / <b>95만~140만</b> (수정 2회).
              </li>
              <li className="note">
                <b>제외:</b> 블로그/뉴스 글관리, 자체 결제.
              </li>
            </ul>
          </article>

          <article id="content" className="pkg-detail">
            <h3>3) Content Lite — 뉴스/블로그가 있는 홍보형 사이트</h3>
            <ul className="bullets">
              <li>
                <b>언제 맞나요:</b> 공지/소식/블로그 글을 직접 올리고 관리하고
                싶을 때.
              </li>
              <li>
                <b>구성:</b> Biz Mini 전체 + 뉴스/블로그(목록/상세).
              </li>
              <li>
                <b>글 업로드 방식(택1):</b>
                <ul>
                  <li>구글 시트에 쓰면 자동 반영</li>
                  <li>JSON/마크다운 파일 업로드(간단 가이드 제공)</li>
                </ul>
              </li>
              <li>
                <b>부가기능:</b> 카테고리/태그, 썸네일, 글 숨김, 기본 검색.
              </li>
              <li>
                <b>기간/비용:</b> 약 3주 / <b>150만~210만</b> (수정 2회).
              </li>
            </ul>
          </article>

          <article id="shoplink" className="pkg-detail">
            <h3>4) Shop Link — 상품 소개 + 외부 결제 연결</h3>
            <ul className="bullets">
              <li>
                <b>언제 맞나요:</b> 상품 소개는 우리 사이트에서, 결제는
                스마트스토어/토스 링크로 넘길 때.
              </li>
              <li>
                <b>구성:</b> 상품 목록, 상품 상세(옵션/가격/재고 기본 표기),
                결제는 외부 결제 페이지로 이동.
              </li>
              <li>
                <b>기간/비용:</b> 3~4주 / <b>190만~250만</b> (수정 2회).
              </li>
              <li className="note">
                <b>제외:</b> 자체 결제/주문·정산 시스템(쇼핑몰 범주).
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* 초간단·저가형 */}
      <section id="budget" className="cd-section">
        <div className="cd-container">
          <h2>초간단·저가형</h2>
          <div className="strip">
            <div className="strip-item">
              <h3>초간단 원페이지(섹션 4개)</h3>
              <ul className="bullets">
                <li>템플릿 기반(디자인 틀 고정), 폰트/컬러만 브랜드 맞춤</li>
                <li>
                  글·사진 제공 시 깔끔 배치, <b>수정 1회 포함</b>
                </li>
              </ul>
              <div className="price">
                <b>35만</b>
              </div>
            </div>
            <div className="strip-item">
              <h3>카페·소상공 미니사이트</h3>
              <ul className="bullets">
                <li>메뉴판, 매장 사진, 지도, 영업시간, “오늘의 메뉴(정적)”</li>
              </ul>
              <div className="price">
                <b>79만~99만</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 새로 추가: 디자인 옵션(손님용) */}
      <section id="design" className="cd-section">
        <div className="cd-container">
          <h2>디자인 옵션(선택)</h2>
          <p className="dim">
            웹 개발 없이도 단독 의뢰 가능 · 필요 항목만 선택하세요.
          </p>
          <div className="table">
            <div className="row head">
              <div>항목</div>
              <div>설명</div>
              <div>비용</div>
            </div>
            {DESIGN.map(([a, b, c], i) => (
              <div className="row" key={i}>
                <div>{a}</div>
                <div className="dim">{b}</div>
                <div>{c}</div>
              </div>
            ))}
          </div>
          <p className="tip">
            로고/브랜드 키트는 이후 웹·인쇄물에 그대로 확장 가능하도록
            납품합니다.
          </p>
        </div>
      </section>

      {/* 선택 옵션(기능 중심) */}
      <section id="addons" className="cd-section">
        <div className="cd-container">
          <h2>선택 옵션(기능)</h2>
          <div className="table">
            <div className="row head">
              <div>옵션</div>
              <div>설명</div>
              <div>비용</div>
            </div>
            {ADDONS.map(([a, b, c], i) => (
              <div className="row" key={i}>
                <div>{a}</div>
                <div className="dim">{b}</div>
                <div>{c}</div>
              </div>
            ))}
          </div>
          <p className="tip">
            비용 절약 팁: 글과 사진을 미리 깔끔하게 준비해 주시면 수정 라운드가
            줄고 일정이 단축됩니다.
          </p>
        </div>
      </section>

      {/* 유지보수 */}
      <section id="care" className="cd-section">
        <div className="cd-container">
          <h2>유지보수(선택)</h2>
          <div className="table">
            <div className="row head">
              <div>등급</div>
              <div>포함</div>
              <div>월 비용</div>
            </div>
            {CARE.map(([a, b, c], i) => (
              <div className="row" key={i}>
                <div>{a}</div>
                <div className="dim">{b}</div>
                <div>{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 방식 + 체크리스트 */}
      <section id="process" className="cd-section">
        <div className="cd-container">
          <h2>진행 방식</h2>
          <details open className="accordion">
            <summary>처음부터 끝까지</summary>
            <ol>
              <li>
                전화/톡 간단 상담 → <b>패키지 5분 추천</b>
              </li>
              <li>
                자료 수급(로고/사진/소개 글) — <i>질문지 제공</i>
              </li>
              <li>와이어/섹션 배치 확인(필요 시 아주 간단히)</li>
              <li>1차 제작 → 데모 링크 전달</li>
              <li>수정 라운드(패키지 포함 횟수)</li>
              <li>검수 & 공개 배포(Netlify/Cloudflare/GitHub Pages)</li>
              <li>간단 사용 가이드(텍스트 또는 짧은 영상)</li>
            </ol>
          </details>

          <details id="checklist" className="accordion">
            <summary>필요한 자료(체크리스트)</summary>
            <ul className="cols">
              <li>
                로고 파일(없으면 <b>디자인 옵션 → 로고 디자인(라이트)</b> 추천)
              </li>
              <li>대표 사진 3~5장(없으면 스톡 대체 가능)</li>
              <li>회사/서비스 소개 문장(짧아도 OK, 우리가 다듬음)</li>
              <li>문의 방법(카톡/메일/폼 링크)</li>
              <li>메뉴/상품 정보(해당 패키지에 한함)</li>
              <li>글/상품형 패키지의 경우 엑셀 또는 구글 시트</li>
            </ul>
          </details>
        </div>
      </section>

      {/* FAQ + 가격 변동 기준 + 요금 정책 */}
      <section id="faq" className="cd-section">
        <div className="cd-container">
          <h2>자주 묻는 질문</h2>
          <div className="faq-grid">
            {[
              [
                "반응형이 뭐예요?",
                "→ 화면 크기에 맞춰 자동으로 보기 좋게 변하는 기능입니다.",
              ],
              [
                "SEO 기본은요?",
                "→ 검색엔진이 잘 읽도록 제목/설명/이미지 태그 등을 세팅합니다.",
              ],
              [
                "GA4는요?",
                "→ 방문자 수와 유입경로를 보는 무료 통계(Google Analytics 4)입니다.",
              ],
              [
                "CMS는 쇼핑몰인가요?",
                "→ 아니요. 블로그/공지처럼 글·리스트 관리하는 간단 편집 기능입니다.",
              ],
              [
                "외부 결제는 뭐죠?",
                "→ 스마트스토어/토스 등 기존 결제 서비스로 이동해 결제합니다(빠르고 저렴).",
              ],
              [
                "유지보수는 꼭 해야 하나요?",
                "→ 선택입니다. 필요할 때만 건당 요청하셔도 됩니다.",
              ],
            ].map(([q, a], i) => (
              <details key={i} className="qa">
                <summary>{q}</summary>
                <p className="dim">{a}</p>
              </details>
            ))}
          </div>

          <article id="pricing-factors" className="pkg-detail">
            <h3>가격이 달라지는 기준</h3>
            <ul className="bullets">
              <li>이미지·카피 준비 정도(우리가 손볼수록 시간 증가)</li>
              <li>수정 라운드 추가 여부</li>
              <li>모션·인터랙션 수준</li>
              <li>다국어, 리스트 관리 등 추가 기능</li>
            </ul>

            <h4 style={{ marginTop: 16 }}>요금 정책(추가 기준)</h4>
            <ul className="bullets">
              <li>
                <b>추가 수정 라운드</b>: 회당 15만~25만
              </li>
              <li>
                <b>긴급 진행(7영업일 내)</b>: 총액 +20%
              </li>
              <li>
                <b>페이지 추가</b>: 내부 페이지 1p당 20만~35만
              </li>
              <li>
                <b>서버/도메인</b>: 클라이언트 부담(저가: Cloudflare
                Pages/Netlify/GP 무료 가능)
              </li>
              <li className="dim">
                ※ 모든 표기는 <b>시작가</b>이며, 최종 금액은 자료 준비도·수정
                라운드·모션 수준에 따라 확정됩니다.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
