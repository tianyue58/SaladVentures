public class Problem1 {
    public int sum_to_n_a(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }

    public int sum_to_n_b(int n) {
        int sum = 0;
        int i = 1;
        while (i <= n) {
            sum += i;
            i++;
        }
        return sum;
    }

    public int sum_to_n_c(int n) {
        if (n == 1) {
            return 1;
        } else {
            return n + sum_to_n_c(n - 1);
        }
    }

    public int sum_to_n_d(int n) {
        return (1 + n) * n / 2;
    }
}
