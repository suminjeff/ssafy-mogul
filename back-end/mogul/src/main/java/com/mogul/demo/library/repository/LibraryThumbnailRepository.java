package com.mogul.demo.library.repository;

import com.mogul.demo.library.entity.LibraryThumbnailEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LibraryThumbnailRepository extends JpaRepository<LibraryThumbnailEntity, Long> {

    List<LibraryThumbnailEntity> findByIsDeletedFalse(Pageable pageable);

    List<LibraryThumbnailEntity> findByUserIdAndIsDeletedFalseOrderByRegisteredDateDesc(Long userId);

    Optional<LibraryThumbnailEntity> findOneById(Long id);
}
