package com.example.helloworld;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = "server.port=0")
class HelloWorldApplicationTest {

    @Test
    void contextLoads() {
        // This test will pass if the application context loads successfully
    }
}