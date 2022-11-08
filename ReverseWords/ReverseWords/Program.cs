string ReverseWords(string s)
{
    string reverse = "";
    foreach (var word in s.Split(' '))
    {
        string temp = "";
        foreach (var ch in word.ToCharArray())
        {
            temp = ch + temp;
        }
        reverse = reverse + temp + " ";
    }
    return reverse.Trim();
}

string text = "Hello there!";

string reversedText = ReverseWords(text);

Console.WriteLine(reversedText);
