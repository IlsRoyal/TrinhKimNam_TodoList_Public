import React from "react";

const Header = () => {
    return <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold text-tranparent bg-primary bg-clip-text">
            TodoList
        </h1>
        <p className="text-muted-foreground">
            Quản lý công việc của bạn. Thành công sẽ đến! 🎆
        </p>
    </div>
}

export default Header;