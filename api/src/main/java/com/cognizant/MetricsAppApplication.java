package com.cognizant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author 739243
 *
 */
@SpringBootApplication
@EnableSwagger2
public class MetricsAppApplication {
	public static void main(String[] args) {
		SpringApplication.run(MetricsAppApplication.class, args);
	}

	@Bean
	public Docket configureMetricsApiDocumentation() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select().apis(RequestHandlerSelectors.basePackage("com.cognizant.application"))
				.build();
	}
}
