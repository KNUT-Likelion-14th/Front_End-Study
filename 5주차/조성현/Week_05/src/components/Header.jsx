import { lions } from '../data/lions';

export default function Header() {
    return (
        <>
            <div className="input_form_toggle_btn">
                <button id="show_input_form_btn">
                    아기 사자 추가
                </button>
                <button id="last_lion_delete_btn">마지막 아기 사자 삭제</button>
                <p id="lion_count">현재 아기 사자 수: {lions.length}</p>
            </div>

            <div className="random_add_area">
                <button id="add_random_lion_btn">랜덤 1명 추가</button>
                <button id="add_five_random_lion_btn">랜덤 5명 추가</button>
                <button id="reload_btn">전체 새로고침</button>
                <p id="status_text">준비 완료</p>
            </div>

            <div className="filter_area">
                <div className="input_group">
                    <label htmlFor="filter_part">파트</label>
                    <select name="filter_part" id="filter_part">
                        <option value="All">전체</option>
                        <option value="Front">프론트엔드</option>
                        <option value="Back">백엔드</option>
                        <option value="Design">디자인</option>
                    </select>
                </div>
                <div className="input_group">
                    <label htmlFor="sort_order">정렬</label>
                    <select name="sort_order" id="sort_order">
                        <option value="latest">최신 추가 순</option>
                        <option value="oldest">오래된 추가 순</option>
                        <option value="name">이름 순</option>
                    </select>
                </div>
                <div className="input_group">
                    <label htmlFor="search_name">검색</label>
                    <input type="text" id="search_name" placeholder="이름 검색" />
                </div>
            </div>

            <div className="input_form_container">
                <form>
                    <div className="name_part_row">
                        <div className="input_group">
                            <label htmlFor="name">이름</label>
                            <input type="text" id="name" name="name" />
                        </div>

                        <div className="input_group">
                            <label htmlFor="part_selector">파트</label>
                            <select name="part_selector" id="part_selector">
                                <option value="">본인의 파트 선택</option>
                                <option value="Front">프론트엔드</option>
                                <option value="Back">백엔드</option>
                                <option value="Design">디자인</option>
                            </select>
                        </div>
                    </div>

                    <div className="input_group">
                        <label htmlFor="tech">관심 기술</label>
                        <input type="text" id="tech" name="tech" placeholder="쉼표로 구분하여 입력 (예: React, Next.js)" />
                    </div>

                    <div className="input_group">
                        <label htmlFor="short_intro">한 줄 소개</label>
                        <input type="text" id="short_intro" name="short_intro" />
                    </div>

                    <div className="input_group">
                        <label htmlFor="intro">자기소개</label>
                        <textarea id="intro" name="intro" rows="4"></textarea>
                    </div>

                    <div className="input_group">
                        <label htmlFor="comment">짧은 한마디</label>
                        <input type="text" id="comment" name="comment" />
                    </div>

                    <div className="contact_info">
                        <h3>연락처</h3>
                        <div className="input_group">
                            <label htmlFor="email">이메일</label>
                            <input type="email" id="email" name="email" placeholder="" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="website">웹사이트</label>
                            <input type="url" id="website" name="website" placeholder="https://example.com" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="phone">전화번호</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                    </div>

                    <div className="submit_btn_wrapper">
                        <button type="button">랜덤 값 채우기</button>
                        <button type="button" id="add_btn">추가</button>
                        <button type="button" id="cancel_btn">취소</button>
                    </div>
                </form>
            </div>
        </>
    );
}