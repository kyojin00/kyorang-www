import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: '환불 정책 — 교랑(KYORANG)',
}

export default function RefundPage() {
  return (
    <LegalPage
      title="환불 정책"
      effectiveDate="2026년 10월 13일"
      intro="교랑(KYORANG)이 판매하는 웹사이트 템플릿과 웹사이트 제작 서비스의 청약철회·환불 기준입니다. 「전자상거래 등에서의 소비자보호에 관한 법률」을 따릅니다."
    >
      <h2>1. 웹사이트 템플릿 (디지털 콘텐츠)</h2>
      <ul>
        <li>입금 전에는 언제든 주문을 취소할 수 있어요.</li>
        <li>입금 후 파일을 보내드리기 전에는 전액 환불해 드려요.</li>
        <li>
          템플릿은 복제가 가능한 디지털 콘텐츠라, 파일을 보내드린 뒤에는 「전자상거래법」
          제17조 제2항 제5호에 따라 청약철회가 제한돼요. 이 사실은 상품 페이지와 구매 신청 화면에
          미리 안내해요.
        </li>
        <li>
          다만 상품 설명과 다르거나 파일이 손상되어 쓸 수 없는 경우, 받은 날부터 3개월 안에(그
          사실을 안 날부터 30일 안에) 알려주시면 수정본을 드리거나 전액 환불해 드려요.
        </li>
      </ul>

      <h2>2. 웹사이트 제작 (용역)</h2>
      <table>
        <thead>
          <tr>
            <th>시점</th>
            <th>환불</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>계약 후 작업 시작 전</td>
            <td>착수금 전액 환불</td>
          </tr>
          <tr>
            <td>디자인 시안 전달 후</td>
            <td>착수금에서 진행된 작업분을 빼고 환불</td>
          </tr>
          <tr>
            <td>개발 완료·오픈 후</td>
            <td>환불 불가 (하자는 무상 수정)</td>
          </tr>
        </tbody>
      </table>
      <p>구체적인 금액과 일정은 계약 시 견적서·계약서에 따로 정하며, 계약서 내용이 이 정책보다 우선해요.</p>

      <h2>3. 환불 방법</h2>
      <p>
        환불은 요청을 받은 날부터 3영업일 안에 입금하신 계좌로 돌려드려요. 문의 페이지나 메일로
        주문번호와 함께 요청해 주세요.
      </p>
    </LegalPage>
  )
}
