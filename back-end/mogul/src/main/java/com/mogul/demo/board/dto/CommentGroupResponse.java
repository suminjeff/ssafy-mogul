package com.mogul.demo.board.dto;

import java.util.List;

import lombok.Data;

@Data
public class CommentGroupResponse extends CommentResponse {
	List<CommentReadResponse> children; // 자식개체
}
