#include <iostream>
#include <cstdlib> 
#include <fstream> // Include cstdlib for the system function

int main() {
    // Paths to open in separate command prompt windows
    const char* path1 = "C:\\Users\\sushant sonawane\\Desktop\\MCA-2 Sem-4\\Project\\Development\\StudCamp";
    const char* path2 = "C:\\Users\\sushant sonawane\\Desktop\\MCA-2 Sem-4\\Project\\Development\\backend";
  
    
    // Open command prompt for the first path
    std::string cmd1 = "start cmd /k cd /d " + std::string(path1);
    std::cout << "Opening command prompt for path 1..." << std::endl;
    system(cmd1.c_str());

    // Open command prompt for the second path
    std::string cmd2 = "start cmd /k cd /d " + std::string(path2);
    std::cout << "Opening command prompt for path 2..." << std::endl;
    system(cmd2.c_str());

   
    

    return 0;
}
