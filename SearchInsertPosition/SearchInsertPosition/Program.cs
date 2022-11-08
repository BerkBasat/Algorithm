int SearchInsert(int[] nums, int target)
{
    int low = 0;
    int high = nums.Length - 1;

    while (low + 1 < high)
    {
        int mid = (low + high) / 2;
        if (nums[mid] == target)
        {
            return mid;
        }
        if (nums[mid] < target)
        {
            low = mid;
        }
        else
        {
            high = mid; ;
        }
    }

    if (nums[low] >= target)
    {
        return low;
    }
    if (nums[high] >= target)
    {
        return high;
    }
    else
    {
        return high + 1;
    }
}

int[] arr = { 1, 3, 5, 6 };
int target = 7;

var result = SearchInsert(arr, target);

Console.WriteLine($"Output: {result}");
