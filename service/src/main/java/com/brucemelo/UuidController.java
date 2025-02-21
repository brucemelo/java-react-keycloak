package com.brucemelo;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.authentication.Authentication;
import io.micronaut.security.rules.SecurityRule;

import java.util.UUID;

@Controller("/uuid")
@Secured(SecurityRule.IS_AUTHENTICATED)
public class UuidController {

    @Get
    public String uuid(Authentication authentication) {
        System.out.println(authentication.getName()); //Subject
        return UUID.randomUUID().toString();
    }

}
