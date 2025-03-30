<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="java.util.Map"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- 반응형 웹 -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>여기닷 - 여행지</title>
<!-- css -->
<style>
	body {
		display: block;
		flex-direction: column;
	}

	#contents {
		display: inline-block;
		justify-content: space-between;
		background-color: antiquewhite;
		width: 100%;
	}

	#contents input {
		width: 10%;
		height: 180px;
	}
</style>

</head>
<body>
	<input id="areas" type="hidden" value="" />
	<script type="text/javascript">
//		let asJson = ${areacode};
//		console.log("asJson");
//		console.log(asJson);
//		$(function() {
//			$("#areas").val(asJson.response.body.items.item);
//			let elems = $("#contents input");
//			for (let i = 0; i < elems.length; i++) {
//				$(".main_select form table").html(i);
//				elems.get(i).value = asJson.response.body.items.item[i].name;
//			}
//		});
	</script>
	<div class="main_select" style="background-color: #cad2c5">
		<form name="locationMain" action="#" method="post">
			<br><br><br>
			<table style="margin-left: auto; margin-right: auto;">
				<tr>
					<td>
						<a onclick="load('location_main.lc')">
						<img src="resources/local_images/select_all.png" alt="select_all.png" class="location_si"><br></a>
						전국
					</td>
					<c:forEach var="area" items="${areacode}">
						<td>
							<img src="resources/local_images/select_all.png" alt="select_all.png" class="location_si"><br>
							${area.name}
						</td>
					</c:forEach>
				</tr>
			</table>
			<br><br><br>
		</form>
	</div>

	<div id="contents" align="center">

		<input type="button" value="정보" />
		<input type="button" value="정보" />
		<input type="button" value="정보" />
		<input type="button" value="정보" />

	</div>
</body>
</html>
