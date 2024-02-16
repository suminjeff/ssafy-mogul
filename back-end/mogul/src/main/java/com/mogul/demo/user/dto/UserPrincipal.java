package com.mogul.demo.user.dto;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.mogul.demo.user.role.Role;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@RequiredArgsConstructor
@ToString
public class UserPrincipal implements UserDetails {
	private final String id;
	private final Role role;
	@Getter
	private final GrantedAuthority authority;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getPassword() {
		return "[PROTECTED]";
	}

	@Override
	public String getUsername() {
		return id;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public static UserPrincipal create(UserAuth user) {
		return new UserPrincipal(
			Long.toString(user.getId()),
			user.getRole(),
			new SimpleGrantedAuthority(user.getRole().name())
		);
	}
}
