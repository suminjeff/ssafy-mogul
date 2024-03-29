package com.mogul.demo.library.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "user_library")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@IdClass(LibraryUserPK.class)
public class LibraryUserEntity {
    @Id
    @Column(name = "library_id", nullable = false)
    private Long libraryId;

    @Id
    @Column(name = "user_id",nullable = false)
    private Long userId;

    @Column(name = "subscribe_registered_date", nullable = false)
    @CreationTimestamp
    private Date registeredDate;
}
