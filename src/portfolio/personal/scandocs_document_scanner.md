# Scandocs
### Document Scanner
Scandocs is a simple and efficient document scanner app for iOS. Capture, organize, and manage your documents effortlessly. What sets Scandocs apart? It's totally free, with no ads or hidden subscriptions!

### Features
* 📷 Easy Scanning: Utilize your device's camera to quickly scan documents.
* 📑 Organize Documents: Create and manage folders to keep your scans organized.
* 🚀 Fast and Lightweight: Enjoy a streamlined experience with a focus on simplicity.
* 🔄 iCloud Synced: Your saved document are synced in iCloud. You can access it on any iOS devices that use the same iCloud account.

### Screenshoots
![Scandocs](/assets/portfolio/port_personal_scandocs_apps_flow.png)

### Technology Behind the Apps
#### Mono-Repo Modular with Development Pods
I map every page in my app and breakdown its dependency. As a result, I get these dependency graph which is separated into 3-level of modularization.

![Scandocs](/assets/portfolio/port_personal_scandocs_dependency_graph.png)

#### Dependency Injection
I solve the inter-dependency needs by using `Dependency Injection`. This approach can avoid the import of other internal framework with the same level, otherwise it can lead to circular dependency.

#### Core Data with CloudKit Sync
I implement `CoreData` to save page-scanner result, then sync the storage to the user’s personal iCloud. As result, user still can see their scanned page on other iOS device if they’re log in with the same iCloud account.

### Github
Check it out this Xcode project on my Github Profile here:
https://github.com/rickirby/scandocs