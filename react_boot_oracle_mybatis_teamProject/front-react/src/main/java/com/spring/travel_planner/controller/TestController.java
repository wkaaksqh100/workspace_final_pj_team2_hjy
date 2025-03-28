package com.spring.travel_planner.controller;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.spring.travel_planner.dao.MemberDAOImpl;
import com.spring.travel_planner.sys.APIConfig;

/**
 * [ <a href="https://doc.clickup.com/9018815828/d/h/8ct0dam-2398/41d697b5b23533c">개발방향 정리 페이지</a> ] <br>
 * 주소를 Ctrl + 왼쪽클릭하면, 정리 페이지로 이동.
 * 
 * @author YeongDae.Jeon
 *
 */
@Controller
public class TestController {
	private static final Logger logger = LoggerFactory.getLogger(TestController.class);
	private Map<String, Object> requestAreaCode1 = APIConfig.TourAPI.mapAreaCode1();
	private Map<String, Object> requestDetailCommon1 = APIConfig.TourAPI.mapDetailCommon1();
	private Map<String, Object> requestAreaBasedList1 = APIConfig.TourAPI.mapAreaBasedList1();

	@Autowired
	private MemberDAOImpl mem;


	@RequestMapping("/test_tour.do")
	private ModelAndView test_tour() {
		logger.info("test_tour.do");
//		ModelAndView mnv = new ModelAndView("member/test_tour");
		ModelAndView mnv = new ModelAndView("member/sample_tour");

		// 이쯤에서 DB접근부터
		boolean existDB = false;
		if (existDB) {
			logger.info("DB가 존재하여 mybatis로 접근");
		}
		else {
			logger.info("DB가 존재하지 않습니다.");
		}

		// 공통정보
		mnv.addObject("requestAreaCode1", JSONObject.toJSONString(requestAreaCode1));

		mnv.addObject("existDB", existDB);

		return mnv;
	}

	@RequestMapping("/tour_result.do")
//	private ModelAndView tour_result(@RequestBody Map<String, Object> json) {
	private ModelAndView tour_result(@RequestBody List<Object> list) {
		// json데이터를 우리 DTO로 바꾸자
		ModelAndView mnv = new ModelAndView("member/tour_places");
		System.out.println(list);
		mnv.addObject("areacode", list);

		return mnv;
	}
}
