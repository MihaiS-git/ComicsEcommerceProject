package com.mihaisuciu.ecommerce.dao;

import com.mihaisuciu.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {
    /**
     * get the products by category
     * */
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
    /**
     * get the products by keyword
     * */
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);

}
