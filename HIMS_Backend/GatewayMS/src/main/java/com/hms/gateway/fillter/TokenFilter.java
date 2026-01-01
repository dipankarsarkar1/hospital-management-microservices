package com.hms.gateway.fillter;



import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class TokenFilter extends AbstractGatewayFilterFactory<TokenFilter.Config> {

	private static final String JWT_SECRET_KEY="d6965dd0f2df77f74b60ba780598f454e31953ce434d6ec6b4e02a35460c81715f8420a8da0b854d0e7adee4be33d0ee0e61c41c8217fe3120fbb4f32b98d8d5";

    public TokenFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {

            String path = exchange.getRequest().getPath().toString();

            if (path.startsWith("/user/login") || path.startsWith("/user/register")) {
                return chain.filter(exchange.mutate().request(r->r.header("X-Secret-Key", "SECERET")).build());
            }

            HttpHeaders headers = exchange.getRequest().getHeaders();

            if (!headers.containsHeader(HttpHeaders.AUTHORIZATION)) {
                throw new RuntimeException("Authorization header is missing");
            }
            if (exchange.getRequest().getMethod() == HttpMethod.OPTIONS) {
                return chain.filter(exchange);
            }

            String authHeader = headers.getFirst(HttpHeaders.AUTHORIZATION);

            if (authHeader == null || !authHeader.startsWith("Bearer")) {
                throw new RuntimeException("Authorization header is invalid");
            }

            String token = authHeader.substring(7);

            try {
                Claims claims = Jwts.parser()
                        .setSigningKey(JWT_SECRET_KEY)
                        .parseClaimsJws(token)
                        .getBody();

//                 Optional: pass data to downstream services
//                exchange.getRequest().mutate()
//                        .header("email", claims.getSubject())
//                        .build();

            } catch (Exception e) {
                throw new RuntimeException("Invalid or expired token");
            }

            return chain.filter(exchange.mutate().request(r->r.header("X-Secret-Key", "SECERET")).build());
        };
    }

    public static class Config {
        
    }
}