<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="com.spring.travel_planner.sys.APIConfig"%>
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" />
<title>Tour</title>
	<script src="https://code.jquery.com/jquery-3.7.1.min.js"
		integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
		crossorigin="anonymous">
	</script>
</head>
<body>
	<c:choose><c:when test="${!existDB}">
		<%
			String strAPI = "한국어/지역기반관광정보";
			Object api = APIConfig.TourAPI.valueOfLabel(strAPI);
			request.setAttribute("api", api);
			out.print(request.getAttribute("restRequest"));
			out.print(request.getAttribute("restRequest_2"));
			out.print("<br>" + strAPI + "-API : " + api);
			out.print("<h2>TourAPI</h2><br>");
			out.print("<h3>"+ api +"</h3><hr>");
		%>
		<script type="text/javascript">
			$(function() {
				<%-- let tourAPI = "<%= APIConfig.TourAPI.valueOfLabel("한국어/공통정보") %>"; --%>
				/* let tourAPI = "${requestScope.api}"; */
				
<%-- 				let asJson = {
					contentTypeId : "<%= APIConfig.TourAPI.Type.valueOfLabel("쇼핑") %>",
					contentId : 2750143,
					MobileOS : "ETC",
					MobileApp : "AppTest",
					defaultYN : "Y",
					firstImageYN : "Y",
					areacodeYN : "Y",
					catcodeYN : "Y",
					addrinfoYN : "Y",
					mapinfoYN : "Y",
					overviewYN : "Y",
					_type : "json"
				}; --%>
				let asJson = ${restRequest_2};
				console.log(asJson);
				let tourAPI = "${api}";
				$.getJSON(tourAPI, asJson).done(function(data) {
					console.log(data);
//					$("body").append(JSON.stringify(data));
//					window.location = "tour_result.do"
//					데이터를 정리하고 있는 클래스가 필요할듯
					console.log("테스트 투어");
// 					$("#tour_data").val(JSON.stringify(data));
/* 					$("#contents").load("tour_result.do", function(response, status, xhr) {
						console.log("불러옴!");
						console.log($("#tour_data").val());
					});
 */
					$.ajax({
					    url: "tour_result.do",
					    type: "POST",
					    data: JSON.stringify(data),
					    contentType: "application/json; charset=utf-8",
//					    dataType: "json", /* return data */
//						dataType: "html", /* default */
					    success: function(response) {
//					        console.log(response);
							$("#contents").html(response);
					    },
					    error: function(xhr, status, error) {
					    	console.log("[AJAX:ERROR-STATUS] " + status);
					        console.log(xhr.responseText);
					    }
					});
				});
			});
		</script>
		</c:when>
		
		<c:otherwise>
			DB가 있다고합니다!
	</c:otherwise></c:choose>

<!-- 	<input id="tour_data" type="hidden" value="" > -->
	<div id="contents">
		
	</div>
</body>
</html>
