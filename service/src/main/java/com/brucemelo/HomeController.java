package com.brucemelo;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;

@Controller
@Secured(SecurityRule.IS_ANONYMOUS)
public class HomeController {

    @Get
    String home() {
        return "Service API - OK";
    }

}
