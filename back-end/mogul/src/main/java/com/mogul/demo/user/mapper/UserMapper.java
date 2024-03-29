package com.mogul.demo.user.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.mogul.demo.user.dto.UserDto;
import com.mogul.demo.user.dto.UserInfoReadResponse;
import com.mogul.demo.user.dto.UserJoinRequest;
import com.mogul.demo.user.dto.UserRequest;
import com.mogul.demo.user.dto.UserResponse;
import com.mogul.demo.user.entity.User;

@Mapper
public interface UserMapper {
	UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

	@Mapping(target = "email", source = "email")
	@Mapping(target = "password", source = "password")
	@Mapping(target = "nickname", source = "nickname")
	User userJoinRequestToUser(UserJoinRequest userJoinRequest);


	@Mapping(target = "id", source = "id")
	@Mapping(target = "nickname", source = "nickname")
	UserResponse userToUserResponse(User user);

	User userRequestToUser(UserRequest userRequest);


	@Mapping(target = "email", source = "email")
	@Mapping(target = "nickname", source = "nickname")
	UserInfoReadResponse userToUserInfoReadResponse(User user);

	UserDto userToUserDto(User user);
}

