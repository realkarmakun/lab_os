#include <stdio.h>
#include <math.h>

int main() {
    double x = 0;
    while(1) {
        printf("cos(%f)= %f\n", x, cos(x));
        x = x + 0.05;
        sleep(2);
    }
    return 0;
}
