package com.postoverview;

import com.postoverview.post.Post;
import com.postoverview.post.PostService;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/posts")
public class PostResource {
    @RestClient
    @Inject
    PostService postService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Post> getByUserId(@QueryParam("userId") Long userId) {
        return this.postService.getByUserId(userId);
    }
}
