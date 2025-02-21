package com.brucemelo;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.authentication.Authentication;
import io.micronaut.security.rules.SecurityRule;
import io.micronaut.serde.annotation.Serdeable;

import java.util.UUID;

@Controller("/users")
@Secured(SecurityRule.IS_AUTHENTICATED)
public class UserController {

    @Serdeable
    record AppUser(String username) {
    }

    @Get("/auth")
    AppUser auth(Authentication authentication) {
        var username = (String) authentication.getAttributes().get("preferred_username");
        return new AppUser(username);
    }

}
