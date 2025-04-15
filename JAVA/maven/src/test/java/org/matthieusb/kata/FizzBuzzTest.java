package org.matthieusb.kata;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FizzBuzzTest {

    private Kata kata;

    @BeforeEach
    void setUp() {
        kata = new Kata();
    }

    @Test
    @DisplayName("Number 1 should return 1")
    void shouldReturnOneWhenInputIsOne() {
        assertEquals("1", kata.FizzBuzz(1));
    }

    @Test
    @DisplayName("Number 2 should return 2")
    void shouldReturnTwoWhenInputIsTwo() {
        assertEquals("2", kata.FizzBuzz(2));
    }

    @Test
    @DisplayName("Multiple of 3 should return 'Fizz'")
    void shouldReturnFizzWhenIsMultipleOfThree() {
        assertEquals("Fizz", kata.FizzBuzz(3));
    }

    @Test
    @DisplayName("Multiple of 5 should return 'Buzz'")
    void shouldReturnBuzzWhenIsMultipleOfFive() {
        assertEquals("Buzz", kata.FizzBuzz(5));
    }

    @Test
    @DisplayName("Multiple of 3 and 5 should return 'FizzBuzz'")
    void shouldReturnFizzBuzzWhenIsMultipleOfThreeAndFive() {
        assertEquals("FizzBuzz", kata.FizzBuzz(15));
    }

    @ParameterizedTest(name = "#{index} - Input: {0}, Expected: {1}")
    @CsvSource(value = {
            "1, 1",
            "2, 2",
            "3, Fizz",
            "4, 4",
            "5, Buzz",
            "6, Fizz",
            "9, Fizz",
            "10, Buzz",
            "15, FizzBuzz",
            "20, Buzz",
            "30, FizzBuzz",
            "98, 98",
            "99, Fizz",
            "100, Buzz"
    })
    @DisplayName("FizzBuzz test with various inputs")
    void shouldReturnCorrectFizzBuzzValueForDifferentInput(int input, String expected) {
        assertEquals(expected, kata.FizzBuzz(input));
    }
}
