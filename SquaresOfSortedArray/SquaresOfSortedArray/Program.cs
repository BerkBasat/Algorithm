int[] SortedSquares(int[] nums)
{
    int start = 0;
    int end = nums.Length - 1;
    int[] result = new int[nums.Length];

    for (int n = nums.Length - 1; n >= 0; n--)
    {
        if (Math.Abs(nums[start]) > Math.Abs(nums[end]))
        {
            result[n] = nums[start] * nums[start];
            start++;
        }
        else
        {
            result[n] = nums[end] * nums[end];
            end--;
        }
    }
    return result;
}

int[] arr = { -4, -1, 0, 3, 10 };

SortedSquares(arr);
