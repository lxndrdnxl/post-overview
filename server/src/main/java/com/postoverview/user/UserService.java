package com.postoverview.user;


import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.enterprise.context.Dependent;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import java.util.List;


@RegisterRestClient
@Dependent
public interface UserService {

    @GET
    @Produces("application/json")
    List<User> getAll();
}
