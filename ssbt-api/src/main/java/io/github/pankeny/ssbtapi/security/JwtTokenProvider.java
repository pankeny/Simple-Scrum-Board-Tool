package io.github.pankeny.ssbtapi.security;

import io.github.pankeny.ssbtapi.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.AbstractMap;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static io.github.pankeny.ssbtapi.security.SecurityConstants.EXPIRATION_TIME;
import static io.github.pankeny.ssbtapi.security.SecurityConstants.SECRET;

@Component
public class JwtTokenProvider {

    // Todo >>> generate the token

    public String generateToken(Authentication authentication) {
        User user = (User) authentication.getPrincipal();

        Date now = new Date(System.currentTimeMillis());
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);

        String userId = Long.toString(user.getId());

        Map<String, Object> claims = Stream.of(
                new AbstractMap.SimpleEntry<>("id", userId),
                new AbstractMap.SimpleEntry<>("username", user.getUsername()),
                new AbstractMap.SimpleEntry<>("fullName", user.getFullName())
        ).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    // Todo >>> validate the token

    // Todo >>> get userId from token
}
