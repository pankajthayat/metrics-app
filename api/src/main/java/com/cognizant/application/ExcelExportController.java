package com.cognizant.application;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.BadRequestException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.cognizant.dao.ListViewDAO;
import com.cognizant.util.MyExcelView;
import com.cognizant.util.NumericConstants;
import com.cognizant.util.StringConstants;

/**
 * @author 739243
 *
 */
@RestController
@RequestMapping("/metrics-app/v1/api/export")
@CrossOrigin(origins = "*")
public class ExcelExportController {

	@Autowired
	private ListViewDAO dao;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value = "/excel", method = RequestMethod.GET, produces = "application/json")
	public ModelAndView excelExport(
			@RequestParam("metricstype") String metricstype,
			@RequestParam(name="month", required=false) String month,
			@RequestParam(name="year",required=false) String year, 
			@RequestParam(name="podname", required=false) String podname,HttpServletResponse response) {
		try {
			logger.info("Starting service : /metrics-app/v1/api/export/excel");
			Map<String, Object> viewModel = new HashMap<>();
			List<List<String>> dataList;
			List<String> lstData;
			switch (metricstype) {
				case "Sprint" :
					if(null!=month && null!=year){
						dataList = dao.getAgileMetrics(year, month, podname);
					}else{dataList = dao.getAgileMetrics();}
					lstData = StringConstants.AGILE_HEADERS;
					break;
				case "Release" :
					if(null!=month && null!=year){
					dataList = dao.getDevopsMetrics(year, month, podname);
					}else{dataList = dao.getDevopsMetrics();}
					lstData = StringConstants.DEVOPS_HEADERS;
					break;
				default :
					if(null!=month && null!=year){
					dataList = dao.getEngineeringMetrics(year, month, podname);
					}else{dataList = dao.getEngineeringMetrics();}
					lstData = StringConstants.ENG_HEADERS;
					break;
			}
			String sheetName = metricstype
					.substring(NumericConstants.NUM_0, NumericConstants.NUM_1)
					.toUpperCase()
					+ metricstype.substring(NumericConstants.NUM_1);
			viewModel.put(StringConstants.SHEET_NAME,
					sheetName + StringConstants.EMPTY_SPACE
							+ StringConstants.SHEET_TITLE);
			viewModel.put(StringConstants.RESULTS, dataList);
			viewModel.put(StringConstants.ROW_INDEX, NumericConstants.NUM_3);
			viewModel.put(StringConstants.HEADER, lstData);
			SimpleDateFormat dateFormat = new SimpleDateFormat(
					StringConstants.DATE_FORMAT);
			String excelFileName = sheetName + StringConstants.UNDERSCORE
					+ StringConstants.FILE_NAME + StringConstants.UNDERSCORE
					+ dateFormat.format(new Date())
					+ StringConstants.EXCEL_FORMAT;
			response.setHeader("Expires", "0");
			response.setHeader("Cache-Control",
					"must-revalidate,post-check=0, pre-check=0");
			response.setHeader("Pragma", "public");
			response.setContentType("application/octet-stream;charset=Cp1252");
			response.setHeader("Content-Disposition",
					"attachment; filename=\"" + excelFileName + "\"");

			return new ModelAndView(new MyExcelView(), viewModel);
		} catch (Exception ex) {
			logger.error("Error in REQ : /metrics-app/v1/api/export/excel",ex.getMessage());
			throw new BadRequestException(ex.getMessage());
		}
	}

}
