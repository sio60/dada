import { useEffect } from "react";
import Logo from "./components/Logo.jsx";
import PackageCard from "./components/PackageCard.jsx";

const PACKAGES = [
  { id:"starter", name:"Starter LP", tagline:"행사/제품 소개용 원페이지",
    when:"신제품/이벤트/예약·문의 유도 — 한 장으로 핵심만",
    price:"49만~79만 (1~2주, 수정 1회)",
    features:["대표 배너","회사/서비스 요약","고객 로고/후기","문의 버튼(카톡/폼)","반응형","SEO 기본, GA4, 파비콘"],
    not:["블로그/뉴스","결제","다국어"]},
  { id:"bizmini", name:"Biz Mini", tagline:"회사 소개형 소규모 사이트(4페이지)",
    when:"회사 소개/서비스/문의까지 기본 갖춘 미니 홈페이지",
    price:"110만~160만 (2~3주, 수정 2회)",
    features:["메인 / 회사소개 / 서비스 / 문의","부드러운 등장 애니메이션","문의 폼 → 메일 알림"],
    not:["블로그/뉴스","자체 결제"]},
  { id:"content", name:"Content Lite", tagline:"뉴스/블로그 있는 홍보형",
    when:"공지/소식/블로그 글을 직접 관리하고 싶을 때",
    price:"170만~230만 (약 3주, 수정 2회)",
    features:["Biz Mini 전부 + 뉴스/블로그(목록/상세)","구글시트 연동 또는 JSON/MD 업로드 가이드","카테고리/태그, 썸네일, 숨김, 기본 검색"],
    not:[]},
  { id:"shoplink", name:"Shop Link", tagline:"상품 소개 + 외부 결제 연동",
    when:"결제는 스마트스토어/토스 등으로 연결하면 되는 경우",
    price:"220만~290만 (3~4주, 수정 2회)",
    features:["상품 목록/상세(옵션/가격/재고 기본 표기)","외부 결제 페이지로 즉시 이동"],
    not:["자체 결제/주문·정산 시스템"]},
];


const ADDONS = [
  ["라이트 브랜딩","로고 1안 + 색/폰트 가이드 1세트","20~40만"],
  ["카피라이팅","메인/회사/서비스 문구 임팩트 있게","20~40만"],
  ["간이 CMS","구글시트/파일 업로드로 리스트 관리","20~40만"],
  ["다국어","한국어+영어 등(언어당)","20~50만"],
  ["사진/이미지 편집","스톡 찾기 + 간단 보정/합성","10~30만"],
  ["고급 인터랙션","눈길 끄는 모션 1~2곳","30~80만"],
];

const CARE = [
  ["라이트","텍스트/배너 교체 월 2건, 간단 빌드/배포","5만~10만"],
  ["스탠다드","교체 월 4건 + 작은 섹션 수정","15만~25만"],
  ["건당","약정 없음, 1건 단위","5만~ (난이도별)"],
];

export default function App() {
  useEffect(() => { document.title = "C&D — 패키지 비교 데모"; }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* 헤더 (브랜드 텍스트 삭제) */}
      <header className="cd-header">
        <div className="cd-container">
          <button className="cd-brand" onClick={() => scrollTo("packages")} aria-label="go home">
            <Logo />
          </button>
          <nav className="cd-nav">
            <button onClick={() => scrollTo("packages")}>패키지</button>
            <button onClick={() => scrollTo("addons")}>옵션</button>
            <button onClick={() => scrollTo("care")}>유지보수</button>
            <button onClick={() => scrollTo("process")}>진행 방식</button>
            <button onClick={() => scrollTo("faq")}>FAQ</button>
          </nav>
        </div>
      </header>

      {/* 바로 패키지 섹션부터 시작 */}
      <section id="packages" className="cd-section first">
        <div className="cd-container">
          <h2>패키지</h2>
          <p className="dim">필요한 기능을 확인 후 말씀해주세요. 필수/선택요소를 명확히 구분해 드립니다.</p>
          <div className="grid">
            {PACKAGES.map((p) => (<PackageCard key={p.id} {...p} />))}
          </div>

          <div className="strip">
            <div className="strip-item">
              <h3>초간단 원페이지(섹션 4개)</h3>
              <p className="dim">템플릿 기반 — 폰트/컬러만 브랜드 맞춤. 글/사진 주면 깔끔 배치 (수정 1회)</p>
              <div className="price">39만</div>
            </div>
            <div className="strip-item">
              <h3>카페·소상공 미니사이트</h3>
              <p className="dim">메뉴/위치/사진/영업시간/“오늘의 메뉴(정적)”</p>
              <div className="price">59만~79만</div>
            </div>
          </div>
        </div>
      </section>

      <section id="addons" className="cd-section">
        <div className="cd-container">
          <h2>선택 옵션</h2>
          <div className="table">
            <div className="row head"><div>옵션</div><div>이게 뭔가요?</div><div>비용(원)</div></div>
            {ADDONS.map(([a,b,c], i)=>(
              <div className="row" key={i}><div>{a}</div><div className="dim">{b}</div><div>{c}</div></div>
            ))}
          </div>
          <p className="tip">비용 절약 팁: 글·사진을 미리 정리해 주시면 수정 라운드가 줄어듭니다.</p>
        </div>
      </section>

      <section id="care" className="cd-section">
        <div className="cd-container">
          <h2>유지보수(선택)</h2>
          <div className="table">
            <div className="row head"><div>등급</div><div>포함</div><div>월 비용</div></div>
            {CARE.map(([a,b,c], i)=>(
              <div className="row" key={i}><div>{a}</div><div className="dim">{b}</div><div>{c}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="cd-section">
        <div className="cd-container">
          <h2>진행 방식</h2>
          <details open className="accordion">
            <summary>처음부터 끝까지</summary>
            <ol>
              <li>간단 상담 → <b>패키지 5분 추천</b></li>
              <li>자료 받기(로고/사진/소개 글) — <i>질문지 제공</i></li>
              <li>와이어/시안(필요 시) → <b>메인 섹션 우선 확인</b></li>
              <li>1차 제작 → 데모 링크 전달</li>
              <li>수정 라운드(패키지 포함 횟수)</li>
              <li>검수 & 배포(Netlify/Cloudflare/GitHub Pages)</li>
              <li>간단 사용 가이드(텍스트/짧은 영상)</li>
            </ol>
          </details>

          <details className="accordion">
            <summary>우리가 필요한 것(체크리스트)</summary>
            <ul className="cols">
              <li>로고 파일(없으면 라이트 브랜딩 제안)</li>
              <li>대표 사진 3~5장(스톡 대체 가능)</li>
              <li>회사/서비스 소개 문장(짧아도 OK)</li>
              <li>문의 방법(카톡/메일/폼 링크)</li>
              <li>메뉴/상품 정보(해당 시)</li>
              <li>글/상품 목록 엑셀 or 구글시트(해당 시)</li>
            </ul>
          </details>
        </div>
      </section>

      <section id="faq" className="cd-section">
        <div className="cd-container">
          <h2>자주 묻는 질문</h2>
          <div className="faq-grid">
            {[
              ["반응형이 뭐예요?","기기 크기에 맞춰 자동으로 보기 좋게 변합니다."],
              ["SEO 기본은요?","검색엔진이 잘 읽게 제목/설명/이미지 태그를 세팅합니다."],
              ["GA4는요?","방문자 수/유입경로 보는 무료 통계. 계정 연결 도와드립니다."],
              ["CMS가 쇼핑몰인가요?","아니요. 뉴스/블로그 등 글 관리 정도의 간단 편집 기능입니다."],
              ["외부 결제는요?","결제는 스마트스토어/토스 등에서 처리, 우린 소개/연결만 합니다."],
              ["유지보수 필수인가요?","아닙니다. 건당 요청도 가능합니다."],
            ].map(([q,a],i)=>(
              <details key={i} className="qa">
                <summary>{q}</summary>
                <p className="dim">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
