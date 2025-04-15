package org.matthieusb.kata;

public class Kata {
    public static void main(String[] args){
    }

    public String FizzBuzz(int number) {
        if (number % 3 == 0 && number % 5 == 0) { return "FizzBuzz"; } // Or nb % 15 == 0
        if (number % 3 == 0) { return "Fizz"; }
        if (number % 5 == 0) { return "Buzz"; }
        return String.valueOf(number);
    }
}

