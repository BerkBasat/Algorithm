void MoveZeroes(int[] nums)
{
    int nonZeroIndex = 0;

    for (int i = 0; i < nums.Length; i++)
    {
        if (nums[i] == 0)
        {
            continue;
        }
        else
        {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    for (int i = nonZeroIndex; i < nums.Length; i++)
    {
        nums[i] = 0;
    }
}


int[] arr = { 0, 1, 0, 3, 12 };
MoveZeroes(arr);