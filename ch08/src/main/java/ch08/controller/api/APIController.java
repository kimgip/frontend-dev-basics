package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.dto.JsonResult;
import ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class APIController {
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습</h1><p>HTML 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public JsonResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setContents("호이호이!");
		return JsonResult.success(vo);
	}

	@ResponseBody
	@RequestMapping(value="/post1", method=RequestMethod.POST)
	public JsonResult post1(GuestbookVo vo) {
		// service -> repository: db insert 성공한 후,
		vo.setNo(1L);
		vo.setPassword("");
		vo.setRegDate("2024-07-08 15:09:20");
		return JsonResult.success(vo);
	}

	@ResponseBody
	@RequestMapping(value="/post2", method=RequestMethod.POST)
	public JsonResult post2(@RequestBody GuestbookVo vo) {
		// service -> repository: db insert 성공한 후,
		vo.setNo(1L);
		vo.setPassword("");
		vo.setRegDate("2024-07-08 15:09:20");
		return JsonResult.success(vo);
	}
}
