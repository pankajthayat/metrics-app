package com.cognizant.util;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.springframework.web.servlet.view.document.AbstractExcelView;

/**
 * @author 739243
 *
 */
@SuppressWarnings("deprecation")
public class MyExcelView extends AbstractExcelView {

	@SuppressWarnings("unchecked")
	@Override
	protected void buildExcelDocument(Map<String, Object> model,
			HSSFWorkbook workbook, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		List<String> lstData = (List<String>) model.get(StringConstants.HEADER);
		int rowIndex = (int) model.get(StringConstants.ROW_INDEX);
		int colCount = lstData.size();

		HSSFSheet sheet = workbook
				.createSheet(model.get(StringConstants.SHEET_NAME).toString());

		Font f = workbook.createFont();
		f.setBold(true);

		CellStyle cellStyle = workbook.createCellStyle();
		cellStyle.setAlignment(HorizontalAlignment.CENTER);
		cellStyle.setFont(f);

		// Row1
		HSSFRow row = sheet.createRow(0);
		HSSFCell cell = row.createCell(0);
		cell.setCellValue(model.get(StringConstants.SHEET_NAME).toString());
		cell.setCellStyle(cellStyle);

		CellStyle cellStyleBold = workbook.createCellStyle();
		cellStyle.setAlignment(HorizontalAlignment.CENTER);
		cellStyleBold.setFont(f);

		HSSFRow row4 = sheet.createRow(rowIndex);

		for (int i = 0; i < colCount; i++) {
			HSSFCell cell5 = row4.createCell(i);
			cell5.setCellValue(lstData.get(i));
			cell5.setCellStyle(cellStyleBold);
		}

		List<List<String>> results = (List<List<String>>) model
				.get(StringConstants.RESULTS);
		writeFile(results, sheet, rowIndex + NumericConstants.NUM_1);

		workbook.getSheetAt(0);
		autoSizeColumns(sheet, 0, colCount);
	}

	public void autoSizeColumns(HSSFSheet reportSheet, int startCol,
			int endCol) {
		for (int i = startCol; i <= endCol; i++) {
			reportSheet.autoSizeColumn((short) i);
		}
	}

	public void writeFile(List<List<String>> results, HSSFSheet sheet,
			int rowIndex) {

		for (int i = 0; i < results.size(); i++) {
			HSSFRow row5 = sheet.createRow(rowIndex + i);
			List<String> innerList = results.get(i);
			for (int j = 1; j < innerList.size(); j++) {
				HSSFCell cell6 = row5.createCell(j - 1);
				String strCols = null == innerList.get(j)
						? StringConstants.EMPTY
						: innerList.get(j);
				cell6.setCellValue(j == NumericConstants.NUM_3
						? StringConstants.monthMap.get(strCols)
						: strCols);
			}
		}
	}

}