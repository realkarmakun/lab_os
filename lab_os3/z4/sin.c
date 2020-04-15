#include <stdio.h>
#include <math.h>

int main() {
    double x = 0;
    while(1) {
        printf("sin(%f)= %f\n", x, sin(x));
        x = x + 0.005;
        sleep(2);
    }
    return 0;
}
