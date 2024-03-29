package com.mogul.demo.user.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import org.hibernate.annotations.CurrentTimestamp;

import com.mogul.demo.user.dto.UserInfoSetRequest;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


/*
 * Entity는 public 또는 protected 수준의 no-arg 생성자가 필요한데,
 * protected로 설정할 경우 UserMapper 내부(UserMapperImpl)에서
 * 생성자를 호출할 수 없어져 mapstruct에서 문제가 발생한다.
 */
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
@Getter
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id", nullable = false)
	private Long id;

	@Column(name = "user_email", nullable = false, unique = true)
	@Setter
	@Email
	private String email;

	@Column(name = "user_password", nullable = false)
	@Setter
	private String password;

	@Column(name = "user_nickname", nullable = false, unique = true)
	@Setter
	private String nickname;

	// @Column(name = "user_profile_image", nullable = false, unique = true)
	// private String profileImage;

	@Column(name = "user_registered_date", nullable = false)
	@CurrentTimestamp
	private LocalDateTime registeredDate;

	@Column(name = "user_deleted_date", nullable = false)
	private LocalDateTime deletedDate;

	@Column(name = "user_is_deleted")
	private Byte isDeleted = (byte) 0;

	public User softDelete() {
		deletedDate = LocalDateTime.now();
		isDeleted = (byte) 1;

		return this;
	}

	public User update(UserInfoSetRequest userInfoSetRequest) {
		this.nickname = userInfoSetRequest.getNickname();
		// this.password = userInfoSetRequest.getPassword();

		return this;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		User user = (User)o;
		return Objects.equals(id, user.id) && Objects.equals(email, user.email)
			&& Objects.equals(nickname, user.nickname);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, email, nickname);
	}
}
