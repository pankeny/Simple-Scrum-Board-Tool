package io.github.pankeny.ssbtapi.security;

import io.github.pankeny.ssbtapi.domain.User;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);
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

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
            return true;
        } catch (SignatureException exception) {
            logger.error("Invalid JWT Signature");
        } catch (MalformedJwtException exception) {
            logger.error("Invalid JWT Token");
        } catch (ExpiredJwtException exception) {
            logger.error("Expired JWT Token");
        } catch (UnsupportedJwtException exception) {
            logger.error("Unsupported JWT Token");
        } catch (IllegalArgumentException exception) {
            logger.error("JWT claims string is empty");
        }

        return false;
    }

    public Long getUserIdFromJwt(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody();
        return Long.parseLong((String) claims.get("id"));
    }
}
