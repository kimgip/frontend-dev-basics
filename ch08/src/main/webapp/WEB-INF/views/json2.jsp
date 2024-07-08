<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src='https://code.jquery.com/jquery-3.7.1.min.js'></script>
<title>Insert title here</title>
<script>
$(function(){
	$('button').click(function(){
		var vo = {
			name: "둘리",
			password: "1234",
			contents: "호이호이호이~!"
		};
		
		$.ajax({
			url: "/ch08/api/post1",
			async: true,
			type: "post",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded",
			data: $.param(vo), 
			success: function(response){
				if(response.result !== "success"){
					console.error(response.message);
					return;
				}
				
				var vo = response.data;
				
				var htmls = "";
				htmls += ("<h3>" + vo.no + "</h3>");
				htmls += ("<h4>" + vo.name + "</h4>");
				htmls += ("<h5>" + vo.contents + "</h5>");
				
				$("#data").html(htmls);
			},
			error: function(xhr, status, err){
				console.log(status, erro);
			}
		});
	});
})
</script>
</head>
<body>
	<h1>Ajax Test: JSON Format Data: $.ajax() 함수 사용하기</h1>
	<button>데이터 보내기(POST, PUT, DELETE)</button>
	<div id="data"></div>
</body>
</html>