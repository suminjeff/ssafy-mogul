package com.mogul.demo.common.dto;

import com.mogul.demo.library.dto.LibraryResponse;
import com.mogul.demo.webtoon.dto.WebtoonResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LibraryDetailResponse {
    LibraryResponse library;
    List<WebtoonResponse> webtoons;
}
