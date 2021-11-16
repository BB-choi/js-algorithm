#include <stdio.h>

int ft_swap(char* a, char* b)
{
    char temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int chk(int n, char(* board)[50])
{
    int count = 1; // 같은 문자 count
    int result = 0;

    // 가로 확인
    for (int i = 0; i < n; i++)
    {
        count = 1;
        for (int j = 0; j < n - 1; j++)
        {
            if (board[i][j] == board[i][j + 1])
            {
                count++;
            }
            else count = 1;
            if (result < count) result = count;
        }
    }
    // 세로 확인
    for (int i = 0; i < n; i++)
    {
        count = 1;
        for (int j = 0; j < n - 1; j++)
        {
            if (board[j][i] == board[j + 1][i])
            {
                count++;
            }
            else count = 1;
            if (result < count) result = count;
        }
    }
    return (result);
}

int main(void)
{
    int n;
    char board[50][50];
    int answer = 0;
    int result;
    scanf("%d\n", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%s", &board[i]);
    }

    // board 입력 확인
    // for (int i = 0; i < n; i++)
    // {
    //     for (int j = 0; j < n; j++)
    //     {
    //         printf("%c : %d %d", board[i][j], i, j);
    //     }
    //     printf("\n");
    // }

    for (int i = 0; i < n; i++)
    {
        result = 0;
        for (int j = 0; j < n - 1; j++)
        {
            // 옆 사탕 바꾸기
            ft_swap(&board[i][j], &board[i][j + 1]);
            result = chk(n, board);
            // 사탕 원위치
            ft_swap(&board[i][j + 1], &board[i][j]);
            if (answer < result)
            {
                answer = result;
            }

            // 위아래 사탕 바꾸기
            ft_swap(&board[j][i], &board[j + 1][i]);
            result = chk(n, board);
            // 사탕 원위치
            ft_swap(&board[j + 1][i], &board[j][i]);
            if (answer < result)
            {
                answer = result;
            }
        }
    }
    printf("%d", answer);
    return (0);
}