package com.postoverview.post;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.enterprise.context.Dependent;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import java.util.List;

@RegisterRestClient
@Dependent
public interface PostService {

    @GET
    @Produces("application/json")
    List<Post> getByUserId(@QueryParam("userId") Long userId);
}
