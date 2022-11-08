int Search(int[] nums, int target)
{
    int low = 0;
    int high = nums.Length - 1;

    while (low <= high)
    {
        int mid = (high + low) / 2;
        if (nums[mid] == target)
        {
            return mid;
        }
        if (nums[mid] < target)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }

    }

    return -1;

}

int[] nums = { -1, 0, 3, 5, 9, 12 };
int target = 9;

var result = Search(nums, target);

Console.WriteLine($"Output: {result}");


