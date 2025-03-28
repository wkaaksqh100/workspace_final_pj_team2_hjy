package com.spring.travel_planner.sys;

import java.util.HashMap;
import java.util.Map;

public final class APIConfig {
	public static String TOUR_API_KOR_KEY = "?ServiceKey=vQkOIwgxBt6hPrd9oi4ilRgPxTnXhFRqIz7ouD4HcxfgOEeCxXczaQREqB%2BjK4xU5q2kdCMqR1HxfC4woJd9Yg%3D%3D";


	public enum TourAPI {
//		KOR_SERVICE("http://apis.data.go.kr/B551011/KorService1"),
		한국어("http://apis.data.go.kr/B551011/KorService1"),
		영어("http://apis.data.go.kr/B551011/EngService1");

		public final String label;
		private TourAPI(String label) {
			this.label = label;
		}

		@Override
		public String toString() {
			return this.label;
		}

		public static Object valueOfLabel(String label) {
			if (label.contains("/")) {
				String[] url = label.split("/");
				String result = "";

				for (TourAPI e : values()) {

					if (e.name().equals(url[0])) {
						result += e.label;
						break;
					}
				}

				for (Operation e : Operation.values()) {
					if (e.name().equals(url[1])) {
						result += e.label;
						return result + TOUR_API_KOR_KEY;
					}
				}
			}
			else {
				for (TourAPI e : values()) {
					if (e.name().equals(label)) {
						return e.label + TOUR_API_KOR_KEY;
					}
				}
			}
			return null;
		}

		public enum Type {
			// 국문관광타입
			관광지("12"),
			문화시설("14"),
			축제공연행사("15"),
			여행코스("25"),
			레포츠("28"),
			숙박("32"),
			쇼핑("38"),
			음식점("39");

			public final String label;
			private Type(String label) {
				this.label = label;
			}
			
			@Override
			public String toString() {
				return this.label;
			}
			
			public static Type valueOfLabel(String label) {
				for (Type e : values()) {
					if (e.name().equals(label)) {
						return e;
					}
				}
				return null;
			}
		}

		public enum Operation {
			서비스분류코드조회("/categoryCode1"),
			지역코드조회("/areaCode1"),
			공통정보("/detailCommon1"),
			소개정보("/detailIntro1"),
			지역기반관광정보("/areaBasedList1"),
			키워드조회("/searchKeyword1");

			public final String label;
			private Operation(String label) {
				this.label = label;
			}

			@Override
			public String toString() {
				return this.label;
			}

			public static Operation valueOfLabel(String label) {
				for (Operation e : values()) {
					if (e.name().equals(label)) {
						return e;
					}
				}
				return null;
			}
		}

		/**<h2>[지역코드 요청방법]</h2>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br>
		 * <b>put</b>메서드를 이용해서 양식을 작성하시면 됩니다.<br>
		 * <u>예</u>를 들면, <blockquote>
		 * 
		 * <b>Map</b><<b>String</b>, <b>Object</b>> <u>requestAreaCode1</u> = APIConfig.<b>TourAPI</b>.<i>mapAreaCode1</i>();<br>
		 * requestAreaCode1.<i>put</i>("contentTypeId", APIConfig.TourAPI.Type.valueOfLabel("쇼핑"));<br>
		 * requestAreaCode1.<i>put</i>("contentId", 2750143);
		 * 
		 * </blockquote>
		 * 이런식으로 데이터를 추가한 <u>후</u>에 <blockquote>
		 * 
		 * <b>String</b> <u>strJSON</u> = <b>JSONObject</b>.<i>toJSONString</i>(requestAreaCode1);<br>
		 * model.<i>addAttribute</i>("페이지에서 <u>${ }</u>로 사용할 키", <u>strJSON</u>);<br>
		 * 
		 * </blockquote>
		 * 방식으로 <b>JSON</b>형식으로 데이터를 변환시킨 후에 <b>.jsp</b>로 넘겨야 <u>JSON방식으로 사용</u>할수있습니다.
		 * 
		 * @return <u>공통정보</u>를 불러오기위한 <u>요청</u>양식 <b>Map</b><<b>String</b>, <b>Object</b>>
		 * 
		 * 
		 * @author <i>YeongDae.</i> <b>Jeon</b>
		 */
		public static Map<String, Object> mapAreaCode1() {
			return new HashMap<String, Object>() {/**
				 * 
				 */
				private static final long serialVersionUID = 1L;
				{
					put("MobileOS", "ETC");
					put("MobileApp", "AppTest");

					put("numOfRows", 100);

//					put("contentTypeId", APIConfig.TourAPI.Type.valueOfLabel("쇼핑"));
//					put("contentId", 2750143);
//					put("defaultYN", "Y");
//					put("firstImageYN", "Y");
//					put("areacodeYN", "Y");
//					put("catcodeYN", "Y");
//					put("addrinfoYN", "Y");
//					put("mapinfoYN", "Y");
//					put("overviewYN", "Y");

					put("_type", "json");
				}
			};
		}


		/**<h2>[공통정보 요청방법]</h2>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br>
		 * <b>put</b>메서드를 이용해서 양식을 작성하시면 됩니다.<br>
		 * <u>예</u>를 들면, <blockquote>
		 * 
		 * <b>Map</b><<b>String</b>, <b>Object</b>> <u>requestDetailCommon1</u> = APIConfig.<b>TourAPI</b>.<i>mapDetailCommon1</i>();<br>
		 * requestDetailCommon1.<i>put</i>("contentTypeId", APIConfig.TourAPI.Type.valueOfLabel("쇼핑"));<br>
		 * requestDetailCommon1.<i>put</i>("contentId", 2750143);<br>
		 * requestDetailCommon1.<i>put</i>("defaultYN", "Y");<br>
		 * requestDetailCommon1.<i>put</i>("firstImageYN", "Y");<br>
		 * requestDetailCommon1.<i>put</i>("areacodeYN", "Y");<br>
		 * requestDetailCommon1.<i>put</i>("catcodeYN", "Y");<br>
		 * requestDetailCommon1.<i>put</i>("addrinfoYN", "Y");<br>
		 * requestDetailCommon1.<i>put</i>("mapinfoYN", "Y");<br>
		 * requestDetailCommon1.<i>put</i>("overviewYN", "Y");
		 * 
		 * </blockquote>
		 * 이런식으로 데이터를 추가한 <u>후</u>에 <blockquote>
		 * 
		 * <b>String</b> <u>strJSON</u> = <b>JSONObject</b>.<i>toJSONString</i>(requestDetailCommon1);<br>
		 * model.<i>addAttribute</i>("페이지에서 <u>${ }</u>로 사용할 키", <u>strJSON</u>);<br>
		 * 
		 * </blockquote>
		 * 방식으로 <b>JSON</b>형식으로 데이터를 변환시킨 후에 <b>.jsp</b>로 넘겨야 <u>JSON방식으로 사용</u>할수있습니다.
		 * 
		 * @return <u>공통정보</u>를 불러오기위한 <u>요청</u>양식 <b>Map</b><<b>String</b>, <b>Object</b>>
		 * 
		 * 
		 * @author <i>YeongDae.</i> <b>Jeon</b>
		 */
		public static Map<String, Object> mapDetailCommon1() {
			return new HashMap<String, Object>() {/**
				 * 
				 */
				private static final long serialVersionUID = 1L;
				{
					put("MobileOS", "ETC");
					put("MobileApp", "AppTest");

					put("contentTypeId", APIConfig.TourAPI.Type.valueOfLabel("쇼핑"));
					put("contentId", 2750143);
					put("defaultYN", "Y");
					put("firstImageYN", "Y");
					put("areacodeYN", "Y");
					put("catcodeYN", "Y");
					put("addrinfoYN", "Y");
					put("mapinfoYN", "Y");
					put("overviewYN", "Y");

					put("_type", "json");
				}
			};
		}

		/**<h2>[지역기반관광정보 요청방법]</h2>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br>
		 * <b>put</b>메서드를 이용해서 양식을 작성하시면 됩니다.<br>
		 * <u>예</u>를 들면, <blockquote>
		 * 
		 * <b>Map</b><<b>String</b>, <b>Object</b>> <u>requestAreaBasedList1</u> = APIConfig.<b>TourAPI</b>.<i>mapAreaBasedList1</i>();<br>
		 * requestAreaBasedList1.<i>put</i>("arrange", "A");<br>
		 * requestAreaBasedList1.<i>put</i>("areaCode", 32);<br>
		 * requestAreaBasedList1.<i>put</i>("numOfRows", 10);<br>
		 * requestAreaBasedList1.<i>put</i>("pageNo", 1);<br>
		 * requestAreaBasedList1.<i>put</i>("sigunguCode", 1);
		 * requestAreaBasedList1.<i>put</i>("cat1", 1);
		 * requestAreaBasedList1.<i>put</i>("cat2", 1);
		 * requestAreaBasedList1.<i>put</i>("cat3", 1);
		 * requestAreaBasedList1.<i>put</i>("cat3", 1);
		 * requestAreaBasedList1.<i>put</i>("modifiedtime", "YYYYMMDD");
		 * 
		 * </blockquote>
		 * 이런식으로 데이터를 추가한 <u>후</u>에 <blockquote>
		 * 
		 * <b>String</b> <u>strJSON</u> = <b>JSONObject</b>.<i>toJSONString</i>(requestAreaBasedList1);<br>
		 * model.<i>addAttribute</i>("페이지에서 <u>${ }</u>로 사용할 키", <u>strJSON</u>);<br>
		 * 
		 * </blockquote>
		 * 방식으로 <b>JSON</b>형식으로 데이터를 변환시킨 후에 <b>.jsp</b>로 넘겨야 <u>JSON방식으로 사용</u>할수있습니다.
		 * 
		 * @return <u>지역기반관광정보</u>를 불러오기위한 <u>요청</u>양식 <b>Map</b><<b>String</b>, <b>Object</b>>
		 * 
		 * 
		 * @author <i>YeongDae.</i> <b>Jeon</b>
		 */
		public static Map<String, Object> mapAreaBasedList1() {
			return new HashMap<String, Object>() {/**
				 * 
				 */
				private static final long serialVersionUID = 1L;
				{
					put("MobileOS", "ETC");
					put("MobileApp", "AppTest");

					put("numOfRows", 10);
					put("pageNo", 1);

					put("contentTypeId", APIConfig.TourAPI.Type.valueOfLabel("쇼핑"));
					put("arrange", "A");
					put("areaCode", 32);

					put("listYN", "Y");

					put("_type", "json");
				}
			};
		}
	}
}
